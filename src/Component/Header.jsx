import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="green">
      <Container>
        <Navbar.Brand href="#home">Grandoria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#amenities">Amenities</Nav.Link>
            <Nav.Link href="#location">Loaction</Nav.Link>

            <NavDropdown title="pages" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#room/3.1">Room Details</NavDropdown.Item>
              <NavDropdown.Item href="#restaurant/3.2">Restaurant</NavDropdown.Item>
              <NavDropdown.Item href="#offers/3.3">Offers</NavDropdown.Item>
              <NavDropdown.Item href="#event/3.4">Event</NavDropdown.Item>
              <NavDropdown.Item href="#gallery/3.4">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#booking/3.4">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#terms/3.4">Terms Page</NavDropdown.Item>
              <NavDropdown.Item href="#privacy/3.4">Privacy Page</NavDropdown.Item>
              <NavDropdown.Item href="#404/3.4">404 Page</NavDropdown.Item>
              <NavDropdown.Item href="#starter/3.4">Starter Page</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link eventKey={2} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;