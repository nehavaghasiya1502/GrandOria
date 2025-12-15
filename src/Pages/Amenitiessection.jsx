import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaWifi, FaSwimmingPool, FaCar } from "react-icons/fa";
import "./Amenitiessection.css";

import img1 from "../assets/amenities/pool.jpg";
import img2 from "../assets/amenities/rooftop.jpg";
import img3 from "../assets/amenities/valet.jpg";
import img4 from "../assets/amenities/fitness.jpg";
import img5 from "../assets/amenities/restro.jpg";
import img6 from "../assets/amenities/spa.jpg";

import { FaRegCheckCircle } from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";
import { BsCupHot } from "react-icons/bs";
import { BsFlower1 } from "react-icons/bs";




const amenities = [
  {
    id: 1,
    title: "High-Speed Internet",
    desc:
      "Complimentary wireless internet access throughout the hotel premises with enterprise-grade security and unlimited bandwidth for all your connectivity needs.",
    img: img1,
    icon: <FaWifi />,
    points: ["24/7 Available", "High Speed"],
  },
  {
    id: 2,
    title: "Rooftop Pool",
    desc:
      "Luxurious rooftop swimming pool with breathtaking city skyline views. Features heated water, poolside service, and premium lounging areas for ultimate relaxation.",
    img: img2,
    icon: <FaSwimmingPool />,
    points: ["Heated Pool", "City Views"],
  },
  {
    id: 3,
    title: "Valet Parking",
    desc:
      "Premium valet parking service with secure underground facility. Professional attendants ensure your vehicle is safely parked and readily available upon request.",
    img: img3,
    icon: <FaCar />,
    points: ["Secure", "Valet Service"],
  },
  {
    id: 4,
    title: "Modern Fitness Center",
    desc:
      "Cutting-edge fitness facility featuring premium equipment, personal training services, and wellness programs designed to maintain your health routine while traveling.",
    img: img4,
    icon: <IoFitnessOutline />,
    points: ["24/7 Access", "Personal Training"],
  },
  {
    id: 5,
    title: "Signature Restaurant",
    desc:
      "Award-winning culinary experience featuring international cuisine crafted by renowned chefs. Elegant atmosphere with extensive wine selection and impeccable service.",
    img: img5,
    icon: <BsCupHot />,
    points: ["Fine Dining", "Wine Selection"],
  },
  {
    id: 6,
    title: "Luxury Spa",
    desc:
      "Tranquil sanctuary offering therapeutic treatments, rejuvenating massages, and holistic wellness experiences. Escape the everyday stress in our serene environment.",
    img: img6,
    icon: <BsFlower1 />,
    points: ["Full Service", "Wellness Programs"],
  },
];

const Amenities = () => {
  return (
    <Container className="my-5">
      <div className="section-title">
        <h1 className="title-bg">Amenities</h1>
        <h2 className="title-front">Amenities</h2>
      </div>
      <Row className="g-5">
        {amenities.map((item) => (
          <Col md={4} sm={6} key={item.id}>
            <Card className="amenity-card">
              <div className="amenity-img-wrap">
                <Card.Img src={item.img} />

                <div className="amenity-overlay">
                  {item.icon}
                </div>
              </div>

              <Card.Body>
                <h5>{item.title}</h5>
                <p className="text-muted">{item.desc}</p>

                <div className="amenity-points">
                  {item.points.map((p, i) => (
                    <span key={i}><FaRegCheckCircle />{p}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Amenities;
