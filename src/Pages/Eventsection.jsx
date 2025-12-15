import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Eventsection.css";

import img1 from "../assets/events/event1.jpg";
import img2 from "../assets/events/event2.jpg";
import img3 from "../assets/events/event3.jpg";
import img4 from "../assets/events/event4.jpg";
import img5 from "../assets/events/event5.jpg";
import img6 from "../assets/events/event6.jpg";

import { FaRegCheckCircle } from "react-icons/fa";

const amenities = [
    {
        id: 1,
        title: "Wedding Celebrations",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
        img: img1,
        points: ["Premium Venues", " Full Catering"],
    },
    {
        id: 2,
        title: "Business Conferences",
        desc:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
        img: img2,
        points: [" Modern Tech", "WiFi Access"],
    },
    {
        id: 3,
        title: "Special Occasions",
        desc:
            "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi",
        img: img3,
        points: [" Custom Setup", " Event Coordination"],
    },
    {
        id: 4,
        title: "Corporate Retreats",
        desc:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        img: img4,
        points: ["Team Building", " Outdoor Activities"],
    },
    {
        id: 5,
        title: "Entertainment Events",
        desc:
            "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
        img: img5,
        points: [" Live Music", " Dance Floor"],
    },
    {
        id: 6,
        title: "VIP Gatherings",
        desc:
            "Mollit anim id est laborum at vero eos et accusamus et iusto odio dignissimos",
        img: img6,
        points: [" Exclusive Access", "Premium Service"],
    },
];

const Amenities = () => {
    return (
        <Container className="my-0 mb-5">
            <div className="section-title">
                <h1 className="title-bg">Events</h1>
                <h2 className="title-front">Events</h2>
            </div>
            <Row className="g-5">
                {amenities.map((item) => (
                    <Col md={4} sm={6} key={item.id}>
                        <Card className="event-card">
                            <div className="event-img-wrap">
                                <Card.Img src={item.img} />

                                <div className="event-overlay">
                                    {item.icon}
                                </div>

                            </div>

                            <Card.Body>
                                <h5>{item.title}</h5>
                                <p className="text-muted">{item.desc}</p>

                                <div className="event-points">
                                    {item.points.map((p, i) => (
                                        <span key={i}><FaRegCheckCircle />{p}</span>
                                    ))}
                                </div>
                                <div className="hover-underline mt-3">
                                    <h6 className="explore">Explore Details →</h6>
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
