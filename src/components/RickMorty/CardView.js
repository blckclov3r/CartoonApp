
import { Card, Col, Badge } from 'react-bootstrap'
import React from 'react'

export default function CardView({character}) {
  return (
   
      <Col className='my-2'>
         <Card style={{ width: '18rem' }} className="h-100 shadow-sm">
            <Card.Img variant="top" src={character.image} className="img-fluid img-thumbnail" />
            <Card.Header>
                Status:  {character.status === "Alive" ? <Badge bg="success">Alive</Badge> : <Badge bg="danger">Dead</Badge>}
            </Card.Header>
            <Card.Body>
                <Card.Title>{character.name} </Card.Title>
                <Card.Text>
                    <span className='small'>Gender: {character.gender}</span> - <span className='small'>{character.species}</span> <br/>
                    <span className='small'>Origin: {character.origin.name}</span>  <br/>
                    <span className='small'>Location: {character.location.name}</span>  
                </Card.Text>
            </Card.Body>
        </Card>
     </Col>
     
  )
}
