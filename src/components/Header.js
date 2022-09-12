import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar expand="md" className="navbar navbar-expand-md navbar-light3">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="">
          <Nav className="centered">
            <Nav.Link className="nav-link " href="#about-me">About me</Nav.Link>
            <Nav.Link className="nav-link " href="#article">Articles</Nav.Link>
            <Nav.Link className="nav-link" href="#social">Social</Nav.Link>
            <Nav.Link className="nav-link" href="#contact-me">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header