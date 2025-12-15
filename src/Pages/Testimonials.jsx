import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.",
    name: "Robert Johnson",
    role: "Chief Executive Officer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Sarah Williams",
    role: "Marketing Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    name: "Michael Davis",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    text:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.",
    name: "Emily Thompson",
    role: "Design Lead",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="background">
      <Container>
        <div className="section-title">
          <h1 className="title-bg">Testimonials</h1>
          <h2 className="title-front">Testimonials</h2>
        </div>
        <Row className="g-0">
          {testimonials.map((item) => (
            <Col md={6} key={item.id} className="mb-4">
              <div className="testimonial-card">
                <span className="quote">“</span>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-user">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
