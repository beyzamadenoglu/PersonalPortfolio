import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import ContactImage from "../constants/Images/mail.jpg";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sacc64d', 'template_khh5d78', form.current, 'uI-7LPI7UNgt0ijVt')
            .then((result) => {
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (

        <div id="contact-me" className="container-fluid contact">
            <div className="row g-0 contact-area">
                <div className="col-12 col-md-6" id="contact-form-container">
                    <form className="w-auto p-3 h-100" ref={form} onSubmit={sendEmail} id="contact-me-form">
                        <input type="text" name="user_name" placeholder="Name" />
                        <input type="email" name="user_email" placeholder="Email" />
                        <textarea name="message" placeholder='Your message' />
                        <div className="d-inline-flex justify-content-end ">
                        <input className="sendbutton " type="submit" value="Send" />
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