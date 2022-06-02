import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container>
      <Row>
        <Col md={12}>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
               <Link to="/">   <span className="btn btn-primary">Go Home</span></Link>
            </div>
        </div>
        </Col>
      </Row>
    </Container>

  )
}
