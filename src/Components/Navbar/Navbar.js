import React from 'react';
import './Navbar.css';

import logo from '../../images/Logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <div className='Navbar col-12'>
    <Navbar collapseOnSelect className="navContainer" expand="lg" bg="dark" variant="dark">
      <Container className="m-0 w-100">
        <Navbar.Brand href="/"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Who We Are</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Services" className='navDrop' id="collasible-nav-dropdown">
              <NavDropdown.Item href="/lawncare">Lawncare</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              Yard Clean Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Tree Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              Pressure Washing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              Plumbing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
              Electrical
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

/* <a href="/">GT</a>
<div className="divider"></div>
<a href="/lawncare">Lawn Care</a>
<div className="divider"></div>
<a href="/">Yard Clean Up</a>
<div className="divider"></div>
<a href="/">Tree Services</a>
<div className="divider"></div>
<a href="/">Pressure Washing</a>
<div className="divider"></div>
<a href="/">Plumbing</a>
<div className="divider"></div>
<a href="/">Electrical</a>
<div className="divider"></div>
<a href="/">Our Crew</a> */

  );
};

export default Navigation;