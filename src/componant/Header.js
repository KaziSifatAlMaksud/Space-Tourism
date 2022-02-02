import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap'
const Header = () => {
  return <>
  <Navbar  className="navim"bg="dark" variant="dark" expand='lg'>
    <Container>
    
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">00 HOME</Nav.Link>
      <Nav.Link href="#features">01 BESTINATION</Nav.Link>
      <Nav.Link href="#pricing">02 CREW</Nav.Link>
      <Nav.Link href="#pricing">02 TECHNOLOGY</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
};

export default Header;
