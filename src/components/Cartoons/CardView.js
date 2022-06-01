



import React from 'react'
import { Card, Col, Badge } from 'react-bootstrap'

export default function CardView({title, year, image,genre,creator,rating}) {


  return (
      
    <Col className='my-2'>
        <Card style={{ width: '18rem'}} className="h-100 shadow-sm">
        <Card.Img variant="top" src={image} className="img-fluid img-thumbnail" style={{height: "300px", width: "300px"}} onError={(img)=>{
            img.target.src = "https://theinsidetrackinc.com/wp-content/uploads/2019/11/square-placeholder.jpg"
          }}  />
        <Card.Header className='d-flex align-items-center'>
        Status: {rating === "TV-Y" ? <Badge className='ms-1' bg="primary">{rating}</Badge> : <Badge className='ms-1' bg="success">{rating}</Badge>}
        </Card.Header>
        <Card.Body>
            <Card.Title>{title} </Card.Title>
            <Card.Text>
                <span className='small'>Year: {year}</span> - <span className='small'></span> <br/>
                <span className='small'>Genre: {genre.join(' | ')} </span>  <br/>
                <span className='small'>Creator: {creator}</span>  
            </Card.Text>
        </Card.Body>
    </Card>
    </Col>

  )
}
