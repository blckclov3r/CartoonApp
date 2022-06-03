

import React from 'react'
import { Col, Card } from 'react-bootstrap'

export default function CardView({character, characterDirection, image, quote}) {
  return (
    <Col className='my-2'>
         <Card style={{ width: '18rem'}} className="h-100 shadow-sm">
            <Card.Img variant="top" src={image} className="img-fluid p-3"  style={{height: "300px", width: "300px"}} onError={(img)=>{
            img.target.src = "https://theinsidetrackinc.com/wp-content/uploads/2019/11/square-placeholder.jpg"
          }}  />
            <Card.Header className='d-flex align-items-center'>
                {character}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <span className='small'>Quote: {quote}</span> 
                </Card.Text>
            </Card.Body>
        </Card>
     </Col>
  )
}
