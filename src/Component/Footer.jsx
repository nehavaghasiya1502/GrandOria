import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    <Col md={4} sm={6} className="mb-4">
                        <h3 className="footer-brand">Grandoria</h3>
                        <p>A108 Adam Street<br />New York, NY 535022</p>
                        <p><strong>Phone:</strong> +1 5589 55488 55</p>
                        <p><strong>Email:</strong> info@example.com</p>
                    </Col>

                    <Col md={2} sm={6} className="mb-4">
                        <h5 className="footer-title">Useful Links</h5>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                        </ul>
                    </Col>
                    <Col md={2} sm={6} className="mb-4">
                        <h5 className="footer-title">Our Services</h5>
                        <ul className="footer-list">
                            <li>Web Design</li>
                            <li>Web Development</li>
                            <li>Product Management</li>
                            <li>Marketing</li>
                            <li>Graphic Design</li>
                        </ul>
                    </Col>
                    <Col md={2} sm={6} className="mb-4">
                        <h5 className="footer-title">Hic solutasept</h5>
                        <ul className="footer-list">
                            <li>Molestiae accusamus</li>
                            <li>Excepturi dignissimos</li>
                            <li>Suscipit distinctio</li>
                            <li>Dilecta</li>
                            <li>Sit quas consectetur</li>
                        </ul>
                    </Col>
                    <Col md={2} sm={6} className="mb-4">
                        <h5 className="footer-title">Nobis illum</h5>
                        <ul className="footer-list">
                            <li>Ipsam</li>
                            <li>Laudantium dolor</li>
                            <li>Dine</li>
                            <li>Trodela</li>
                            <li>Flexo</li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <div className="footer-row1">
                        <p>© Copyright <span>MyWebsite</span>. All Rights Reserved</p>
                        <div>Designed by</div>
                    </div>
                    <div className="footer-row2">
                        <div className="footer-icons">
                            <div className="icon-box"><FaXTwitter /></div>
                            <div className="icon-box"><FaFacebookF /></div>
                            <div className="icon-box"><FaInstagram /></div>
                            <div className="icon-box"><FaLinkedinIn /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;
