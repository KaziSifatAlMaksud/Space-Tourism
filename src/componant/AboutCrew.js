import React from "react";
import { Col, Image } from "react-bootstrap";
import crew from "../crew";
import CrewNev from "./CrewNev";
const AboutCrew = ({ id }) => {
  const product = crew.find((x) => x._id === id);
  return (
    <>
      <Col className="discrHome">
        <h4 style={{ marginTop: "5px", paddingBottom: "50px" }}>
          {product.heade6}
        </h4>
        <h2>{product.header1}</h2>
        <h1 className="display-3"> {product.name}</h1>
        <p className="py-3" style={{ width: "400px" }}>{product.discrptioin}</p>
      </Col>
      <CrewNev />
      <Col style={{ marginTop: "24%" }}>
        <Image className="tacimage" src={product.image} alt={product.image} />
      </Col>
    </>
  );
};

export default AboutCrew;
