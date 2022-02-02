import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar className="navim" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="li text-white px-4" href="#home">00 HOME</Nav.Link>
            <Nav.Link className="li text-white px-4" href="#features">01 BESTINATION</Nav.Link>
            <Nav.Link className="li text-white px-4" href="#pricing">02 CREW</Nav.Link>
            <Nav.Link className="li text-white px-4" href="#pricing">03 TECHNOLOGY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
