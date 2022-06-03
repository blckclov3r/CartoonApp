import React from 'react'
import { Container } from 'react-bootstrap'
import Character from './Character'


export default function Futarama() {
    return (
        <Container fluid="md" className='my-5 pt-5'>
            <Character />
            <div className="d-flex justify-content-center align-items-baseline mt-5">
          data source:  <code className="ms-1">https://futuramaapi.herokuapp.com/api</code> 
       </div>
        </Container>
        
    )
}
