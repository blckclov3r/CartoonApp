import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid style={{background: "white"}} className="shadow-sm py-2">
        <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><span  className="nav-link px-2 text-muted">Home</span></li>
            <li className="nav-item"><span className="nav-link px-2 text-muted">Facebook</span></li>
            <li className="nav-item"><span className="nav-link px-2 text-muted">Instagram</span></li>
            <li className="nav-item"><span  className="nav-link px-2 text-muted">Github</span></li>
            <li className="nav-item"><span  className="nav-link px-2 text-muted">LinkedIn</span></li>
        </ul>
        <p className="text-center text-muted">© 2022 Blckclov3r</p>
            </footer>
     </Container>
  )
}
