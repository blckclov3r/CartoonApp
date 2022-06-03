



import React from 'react'
import { Card, Col, Badge } from 'react-bootstrap'

export default function CardView({ Name, PicUrl, Status, Profession, Planet, Species, Age }) {


  return (

    <Col className='my-2' xs={12} sm={6} md={4} xl={3}>
      <Card  className="h-100 shadow-sm">
        <Card.Img variant="top" src={PicUrl} className="img-fluid img-thumbnail" style={{ height: "300px", width: "100%" }} onError={(img) => {
          img.target.src = "https://theinsidetrackinc.com/wp-content/uploads/2019/11/square-placeholder.jpg"
        }} />
        <Card.Header className='d-flex align-items-center'>
          Status: {Status === "Alive" ? <Badge className='ms-1' bg="success">Alive</Badge> : <Badge className='ms-1' bg="danger">Dead</Badge>}
        </Card.Header>
        <Card.Body>
          <Card.Title>{Name} - Age: {Age}</Card.Title>
          <Card.Text>
            <span className='small'>Species: {Species}</span> - <span className='small'>{Species}</span> <br />
            <span className='small'>Planet: {Planet}</span>  <br />
            <span className='small'>Profession: {Profession}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  )
}
