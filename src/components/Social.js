import React from 'react'

import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMedium } from 'react-icons/ai';



const Social = () => {
  return (
    <div id="social"className="container-fluid social">
    <div className="social-header">
        <h2>Social Accounts</h2>
    </div>
        <div className="row">
            <a className="col-lg-3 col-sm-12 mb-4 mb-md-0"  href="https://www.linkedin.com/in/beyzamadenoglu/" target="_blank"><AiOutlineLinkedin size={40} color={"#4b4843"}/>  </a>
            <a className="col-lg-3 col-sm-12 mb-4 mb-md-0" href="https://twitter.com/beyzamadenoglu" target="_blank"><FiTwitter size={40} color={"#4b4843"}/></a>
            <a className="col-lg-3 col-sm-12 mb-4 mb-md-0" href="https://github.com/beyzamadenoglu" target="_blank"><FiGithub size={40} color={"#4b4843"}/></a>
            <a className="col-lg-3 col-sm-12 mb-4 mb-md-0" href="https://medium.com/@beyzamadenoglu" target="_blank"><AiOutlineMedium size={40} color={"#4b4843"}/></a>
        </div>
    </div>
  )
}

export default Social