import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavHeader() {
  return (
    <Navbar bg="light" expand="lg" className='shadow-sm' fixed="top">
    <Container>
      <Link className='navbar-brand' to='/'>CartoonApp</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
     
          <Link className='nav-link' to="/Rick&Morty">Rick&Morty</Link>
          <Link className='nav-link' to="/Futarama">Futarama</Link>
          <Link className='nav-link' to="/Simpson">Simpson</Link>
     
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
