import React from 'react';
import './Resortsection.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import resort1 from '../assets/resort/resort1.png';
import resort2 from '../assets/resort/resort2.png';


const Introsection = () => {
    return (
        <div className="bgcolor mb-5">
            <Container>
                <Row>
                    {/* text */}
                    <Col md={6} sm={6} className='mt-5'>
                        <h1 className='resort1'>Welcome to Grandoria Resort</h1>
                        <div className='resort2 mt-4 fw-bolder'>Where luxury meets tranquility in the heart of nature's paradise.</div>
                        <div className='resort3 mt-4 fw-medium'>Nestled among rolling hills and pristine landscapes, Grandview Resort has been offering exceptional hospitality for over three decades. Our commitment to excellence and attention to detail creates an unforgettable experience for discerning travelers seeking both comfort and adventure.</div>
                        <div className='resort4 mt-2 fw-medium'>From our elegantly appointed suites to our world-class amenities, every aspect of your stay is designed to exceed expectations. Discover breathtaking views, exquisite dining, and personalized service that makes every moment special.</div>

                        <Row className='mb-5 mt-5'>
                            <Col md={3} sm={6}>
                                <h2 className='resort5'><b>185</b></h2>
                                <p className='resort5'>Luxury Rooms</p>
                            </Col>

                            <Col md={3} sm={6}>
                                <h2 className='resort5'><b>98%</b></h2>
                                <p className='resort5'>Guest Satisfaction</p>
                            </Col>

                            <Col md={3} sm={6}>
                                <h2 className='resort5'><b>30</b></h2>
                                <p className='resort5'>Years of Excellence</p>
                            </Col>
                        </Row>

                        {/* buttons */}
                        <Row className="mt-5">
                            <Col md={3} sm={6}>
                                <Button variant="success" className='btn3'><b>Our Story</b></Button>
                            </Col>
                            <Col md={3} sm={6}>
                                <Button variant="success" className='btn4'><b>View Rooms</b></Button>
                            </Col>
                        </Row>

                    </Col>

                    {/* imgs */}
                    <Col md={6} className="mt-5">
                        <div className="resort-img-wrapper">

                            {/* first img */}
                            <div className="img-top">
                                <Image src={resort1} alt="Lobby" fluid />
                                <div className="experience-circle">
                                    <h3>30+</h3>
                                    <span>Years<br />Experience</span>
                                </div>
                            </div>

                            {/* second img */}
                            <div className="img-bottom">
                                <Image src={resort2} alt="Room" fluid />
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Introsection;
