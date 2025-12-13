import React from 'react';
import './Introsection.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import intro from '../assets/intro/intro1.png';


const Introsection = () => {
  return (
    <Container>
      <Row>
        {/* text */}
        <Col md={6} sm={6}>
          <h1 className='luxury'>Luxury Redefined in <br /> Every Stay</h1>
          <div className='intro'>Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</div>

          {/* icons-text */}
          <Row className="mt-5">
            <Col md={4} sm={6} className="d-flex align-items-center gap-2">
              <FaWifi size={20} color='#5d766f' />
              <h6 className='color-green m-0'>Complimentary WiFi</h6>
            </Col>

            <Col md={4} sm={6} className="d-flex align-items-center gap-2">
              <FaCar size={20} color='#5d766f' />
              <h6 className='color-green m-0'>Valet Parking Area </h6>
            </Col>

            <Col md={4} sm={6} className="d-flex align-items-center gap-2">
              <BsCupHot size={20} color='#5d766f' />
              <h6 className='color-green m-0'>24/7 Room Service</h6>
            </Col>
          </Row>

          {/* buttons */}

          <Row className="mt-5">
            <Col md={3} sm={6}>
              <Button variant="success" className='btn1'><b>Book Now</b></Button>
            </Col>
            <Col md={3} sm={6}>
              <Button variant="success" className='btn2'><b>View Rooms</b></Button>
            </Col>
          </Row>

        </Col>

        {/* img */}
        <Col>
        <div className="intro-box mt-5 mb-5">
           <Image src={intro} alt="Intro Image" className='intro-img' fluid />
        </div>
        </Col>

        <hr />

        <Row className='mb-5 mt-5'>
          <Col md={3} sm={6}>
            <h1 className='intro2'><b>150</b></h1>
            <p className='intro2'>LUXURY ROOMS</p>
          </Col>

           <Col md={3} sm={6}>
            <h1 className='intro2'><b>5</b></h1>
            <p className='intro2'>STAR RATING</p>
          </Col>

           <Col md={3} sm={6}>
            <h1 className='intro2'><b>24</b></h1>
            <p className='intro2'>HOUR SERVICE</p>
          </Col>

           <Col md={3} sm={6}>
            <h1 className='intro2'><b>98</b></h1>
            <p className='intro2'>GUEST SATISFACTION</p>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Introsection;
