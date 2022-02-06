import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import technology from "../technology";
import TacNav from "./TacNav";

const AboutTechnology = () => {
  const { id } = useParams();
  const product = technology.find((x) => x._id === id);
  return (
    <div>
      <div className="tackList">
        <Row>
          <Col className="tnav px-3" style={{ marginTop: "100px" }}>
            <TacNav />
          </Col>

          <Col className="tackmain">
            <Row>
              <h2 className="py-3" style={{ marginTop: "-100px" }}>
                {product.heade6}
              </h2>
            </Row>
            <Row
              className="py-3 px-3"
              style={{ width: "40rem", marginTop: "100px" }}
            >
              <div className="py-3">
                <h6>THE TERMINOLOGY...</h6>
                <h1 className="display-1 py-2"> {product.name}</h1>
                <p className="py-3">{product.discrptioin}</p>
              </div>
            </Row>
          </Col>

          <Col>
            <Row className="" style={{ width: "600px" }}>
              <Image src={product.image} alt={product.image} />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutTechnology;
