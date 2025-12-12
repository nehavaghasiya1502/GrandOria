import React from 'react';
import './Introsection.css';
import { Col, Container, Row } from 'react-bootstrap';

const Introsection = () => {
  return (
    <Container>
      <Row>
        <Col md={6} sm={6}>
        <h1 className='luxury'>Luxury Redefined in <br /> Every Stay</h1>
        <div className='intro'>Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Introsection;
