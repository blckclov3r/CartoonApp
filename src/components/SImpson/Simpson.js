
import React from "react"
import { Container } from "react-bootstrap"
import Character from "./Character"

export default function Simpson() {

  return (
   
     <Container fluid="md" className='my-5 pt-5'>
       <Character />
       <div className="d-flex justify-content-center align-items-baseline mt-5">
       <code className='text-dark'>data source:</code> <code className="ms-1">https://thesimpsonsquoteapi.glitch.me</code> 
       </div>
 </Container>
  )
}
