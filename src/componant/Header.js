import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo1 from "../image/logo1.svg";
const Header = () => {
  return (
    <>
      <div className="headerlogo">
        <Image src={logo1} alt={logo1} fluid />
      </div>

      <hr className="line" style={{ borderTop: "1px solid white" }} />

      <Navbar className="navim" variant="dark" expand="lg">
        <Container>
          <Link to="/"></Link>
          <Nav className="ml-auto">
            <Link className="li text-white px-4" to="/">
              00 HOME
            </Link>

            <Link className="li text-white px-4" to="/dstination/1">
              01 DSTINATION
            </Link>

            <Link className="li text-white px-4" to="/crew/2">
              02 CREW
            </Link>

            <Link className="li text-white px-4" to="/technology/3">
              03 TECHNOLOGY
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
