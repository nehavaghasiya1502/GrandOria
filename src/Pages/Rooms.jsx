import React from "react";
import './Rooms.css';
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { BsWifi, BsCupHot } from "react-icons/bs";
import { FaTv, FaSnowflake, FaUsers } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TbFridge } from "react-icons/tb";
import { FaWater } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

import room1 from "../assets/rooms/room1.png";
import room2 from "../assets/rooms/room2.png";
import room3 from "../assets/rooms/room3.png";
import room4 from "../assets/rooms/room4.png";

const RoomsSection = () => {

  const imgRooms = [
    {
      id: 1,
      title: "Classic Double Room",
      price: "$189",
      img: room1,
      features: [<BsWifi />, <FaTv />, <IoCallOutline />]
    },
    {
      id: 2,
      title: "Superior King Room",
      price: "$249",
      img: room2,
      features: [<BsWifi />, <BsCupHot />, <FaSnowflake />]
    },
    {
      id: 3,
      title: "Ocean View Suite",
      price: "$359",
      img: room3,
      features: [<FaWater />, <TbFridge />, <FaUsers />]
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      price: "$1,199",
      img: room4,
      features: [<BsStarFill />, <IoHome />, <IoDiamondOutline />]
    },
  ];

  return (
    <Container className="my-5">
      <div className="section-title">
        <h1 className="title-bg">ROOMS</h1>
        <h2 className="title-front">ROOMS</h2>
      </div>

      <Row>
        {/* big card */}
        <Col md={8}>
          <Card className="border-0 shadow room-main">
            <div className="room-img-wrapper">
              <Image src={room1} fluid className="room-main-img" />
              <span className="room-badge">PRESIDENTIAL</span>

              <div className="room-meta">
                <span><FaUsers /> 6 Guests</span>
                <span><IoHome /> 180m²</span>
                <span><MdLocationOn /> Top Floor</span>
              </div>
            </div>

            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Grand Presidential Suite</h4>
                <div className="text-warning">
                  <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                  <small className="text-muted ms-2">5.0 Excellence</small>
                </div>
              </div>

              <p className="text-muted room-text1  mt-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <div className="room-features">
                <span><BsWifi /> Premium WiFi</span>
                <span><FaTv /> Smart TV</span>
                <span><BsCupHot /> Coffee Bar</span>
                <span><FaSnowflake /> Climate Control</span>
              </div>


              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="price">$649 <small>/ night</small></h4>
                <Button className="reserve-btn">Reserve Suite</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* small cards*/}
        <Col md={4}>
          {/* card 1 */}
          <Card className="mb-4 shadow-sm border-0 small-room">
            <Row className="g-0">
              <Col md={5} className="small-img-wrap">
                <Image src={room2} fluid className="small-img" />
                <div className="hover-icon">
                  <MdArrowOutward />
                </div>
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h6>Executive Business Room</h6>
                  <p className="text-muted smaller">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  <p className="price-sm">$329 / night
                    <Button size="sm" className="ms-5" variant="outline-success">Book</Button></p>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          {/* card 2 */}
          <Card className="mb-4 shadow-sm border-0 small-room">
            <Row className="g-0">
              <Col md={5} className="small-img-wrap">
                <Image src={room3} fluid className="small-img" />
                <div className="hover-icon">
                  <MdArrowOutward />
                </div>
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h6>Garden View Deluxe</h6>
                  <p className="text-muted small">At vero eos et accusamus et iusto odio dignissimos ducimus qui dignissimos ducimus qui.</p>
                  <p className="price-sm">$269 / night
                    <Button size="sm" className="ms-5" variant="outline-success">Book</Button></p>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          {/* card 3 */}
          <Card className="mb-4 shadow-sm border-0 small-room">
            <Row className="g-0">
              <Col md={5} className="small-img-wrap">
                <Image src={room4} fluid className="small-img" />
                <div className="hover-icon">
                  <MdArrowOutward />
                </div>
              </Col>
              <Col md={7}>
                <Card.Body>
                  <h6>Family Comfort Suite</h6>
                  <p className="text-muted small3">Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>
                  <p className="price-sm">$419 / night
                    <Button size="sm" className="ms-5" variant="outline-success">Book</Button></p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        {imgRooms.map((room) => (
          <Col md={3} sm={6} key={room.id}>
            <Card className="img-room-card border-0">
              <div className="img-room-wrap">
                <Image src={room.img} fluid className="img-room-img" />

                <div className="img-room-overlay">
                  <FaEye />
                </div>
              </div>

              <Card.Body className="text-center">
                <h6>{room.title}</h6>
                <p className="img-room-price">
                  {room.price} <span>/night</span>
                </p>
                <div className="room-icons-row">
                  {room.features?.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="hover-underline mt-5">
        <h6 className="explore">Explore All Accommodations →</h6>
      </div>

    </Container>
  );
};

export default RoomsSection;
