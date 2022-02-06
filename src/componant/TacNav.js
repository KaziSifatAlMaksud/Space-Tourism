import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const TacNav = () => {
  return <>      
        <Nav className="takNav" > 
        <Col>
            <Row style={{ width: "90px" }}><Link className="takli " to="/technology/3">1
          </Link></Row>    
            <Row style={{ width: "90px" }}><Link className="takli " to="/technology/2">2
          </Link></Row>    
            <Row style={{ width: "90px" }}><Link className="takli" to="/technology/1">3
          </Link></Row>    
        </Col>          
          
        </Nav>
    </>
};

export default TacNav;
