import React from 'react'
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavHeader() {
  return (
    <Navbar bg="light" expand="lg" className='shadow-sm' fixed="top">
    <Container>
      <Link className='navbar-brand' to='/'>FETCH JSON REACT</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
     
          <Link className='nav-link' to="/Rick&Morty">R&Morty</Link>
          <Link className='nav-link' to="/Cartoon">Cartoon</Link>
          <Link className='nav-link' to="/Simpson">Simpson</Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
