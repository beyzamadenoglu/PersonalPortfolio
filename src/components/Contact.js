import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import env from "react-dotenv";
import { Store } from 'react-notifications-component';
import ContactImage from "../constants/Images/mail.jpg";

const Contact = () => {
    const MESSAGE_MIN_LENGTH = 50;
    const FORM_INITIAL_STATE = {
        user_name: '',
        user_email: '',
        message: ''
       }

    const [state, setState] = React.useState(FORM_INITIAL_STATE);

      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (state.message.length < MESSAGE_MIN_LENGTH) {
            Store.addNotification({
                title: "Cant send!",
                message: `Message should longer than ${MESSAGE_MIN_LENGTH} characters`,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
            return false;
        } else {
            emailjs.sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.PUBLIC_KEY)
            .then(() => {
                setState(FORM_INITIAL_STATE);
                Store.addNotification({
                    title: "Success!",
                    message: "Your message sent!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            }, (error) => {
                Store.addNotification({
                    title: "Error!",
                    message: "Could not send your message!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            });            
        }
    }
    return (

        <div id="contact-me" className="container-fluid contact">
            <div className="row g-0 contact-area">
                <div className="col-12 col-md-6" id="contact-form-container">
                    <form className="w-auto p-3 h-100" ref={form} onSubmit={sendEmail} id="contact-me-form">
                        <input type="text" name="user_name"  value={state.user_name} placeholder="Name" onChange={handleChange}/>
                        <input type="email" name="user_email" value={state.user_email}  placeholder="Email" onChange={handleChange} />
                        <textarea name="message" placeholder='Your message' value={state.message} onChange={handleChange}></textarea>
                        <div className="d-inline-flex justify-content-end ">
                            <input className="sendbutton" type="submit" disabled={!(state.message && state.user_name && state.user_email)} value="Send" />
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <img src={ContactImage} className="img-fluid d-flex mail-img" alt="_contactimage"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact