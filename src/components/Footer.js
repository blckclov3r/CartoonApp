import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
        <footer className="py-4  py-3 pt-4 bg-white">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><span  className="nav-link px-2 text-muted"><Link to="/">Home</Link></span></li>
            <li className="nav-item"  ><span className="nav-link px-2 text-muted" > <a href="https://facebook.com/blckclov3r">Facebook</a> </span></li>
            <li className="nav-item"><span  className="nav-link px-2 text-muted"><a href="https://github.com/blckclov3r">Github</a></span></li>
            <li className="nav-item"><span  className="nav-link px-2 text-muted"><a href="https://www.linkedin.com/in/blckclov3r/">LinkedIn</a></span></li>
        </ul>
        <p className="text-center text-muted">© 2022 Blckclov3r</p>
            </footer>
  )
}
