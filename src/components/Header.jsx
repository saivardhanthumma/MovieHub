import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/logo.png"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    
    <Navbar expand="lg " className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home" className='flex items-center'>
      <img src={Logo} className='w-[60px]' alt='MH' /> <span className='text-blue-400 text-2xl font-bold'>Movie<span className='text-yellow-400'>Hub</span></span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto items-center">
          <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/watchList">
              WatchList
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header