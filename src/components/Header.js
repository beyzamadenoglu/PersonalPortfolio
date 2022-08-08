import React from 'react'
import Logo from '../constants/Images/Logo';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Social</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header