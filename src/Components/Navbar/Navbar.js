import React from 'react';

import logo from '../../images/Logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css';

function Navigation() {
  return (
    <div className='Navbar col-12'>
      
      {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} alt="Logo" className="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Lawncare</a></li>
                  <li><a className="dropdown-item" href="#">Yard Clean-Up</a></li>
                  <li><a className="dropdown-item" href="#">Tree Services</a></li>
                  <li><a className="dropdown-item" href="#">Pressure Washing</a></li>
                  <li><a className="dropdown-item" href="#">Plumbing</a></li>
                  <li><a className="dropdown-item" href="#">Electrical</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    <Navbar collapseOnSelect className="navContainer" expand="lg" bg="dark" variant="dark">
      <Container className="m-0 w-100">
        <Navbar.Brand href="/"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navFlex">
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