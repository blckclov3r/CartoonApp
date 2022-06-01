
import { Card, Col, Badge } from 'react-bootstrap'
import React from 'react'

export default function CardView({character}) {
  return (
     
      <Col className='my-2'>
         <Card style={{ width: '18rem'}} className="h-100 shadow-sm">
            <Card.Img variant="top" src={character.image} className="img-fluid img-thumbnail" style={{height: "300px", width: "300px"}} onError={(img)=>{
            img.target.src = "https://theinsidetrackinc.com/wp-content/uploads/2019/11/square-placeholder.jpg"
          }} />
            <Card.Header className='d-flex align-items-center'>
                Status: {character.status === "Alive" ? <Badge className='ms-1' bg="success">Alive</Badge> : <Badge className='ms-1' bg="danger">Dead</Badge>}
            </Card.Header>
            <Card.Body>
                <Card.Title>{character.name} </Card.Title>
                <Card.Text>
                    <span className='small'>Gender: {character.gender}</span> - <span className='small'>{character.species}</span> <br/>
                    <span className='small'>Origin: {character.origin.name}</span>  <br/>
                    <span className='small'>Last seen: {character.location.name}</span>  
                </Card.Text>
            </Card.Body>
        </Card>
     </Col>
     
  )
}
