import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const SmallNav = () => {
  return (
    <div className="smaNav">
      <Navbar variant="dark" horizontal>
        <Nav style={{ marginLeft: "-235px" }}>
          <Link className="li text-white px-3" to="/dstination/3">
            MOON
          </Link>
          <Link className="li text-white px-3" to="/dstination/2">
            MARS
          </Link>
          <Link className="li text-white px-3" to="/dstination/1">
            EUEOPA
          </Link>
          <Link className="li text-white px-3" to="/dstination/4">
            TITAN
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default SmallNav;
