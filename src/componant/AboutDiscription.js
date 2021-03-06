import React from "react";
import { useParams } from "react-router-dom";
import info from "../info";
import Discription from "../componant/Discription";
import SmallNav from "../componant/SmallNav";
import { Col, Row, Image } from "react-bootstrap";

const AboutDiscription = () => {
  const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);
  return (
    <>
      <div className="DstinatList">
        <Row>
          <Col  className="dst">
            <Row>
              <h2 >{product.heade6}</h2>
            </Row>
            <Row className="dst-row">
              <Image src={product.image} alt={product.image} fluid />
            </Row>
          </Col>

          <Col>
            <Row style={{ width: "28rem" }}>
              <SmallNav />
            </Row>
            <Row style={{ width: "28rem" }}>
              <Discription id={id} />
            </Row>
            <Row
              style={{ width: "28rem", marginLeft: "50px", marginTop: "400px" }}
            >
              <hr />
              <Col>
                <h6>AVG. DISTANCE</h6>
                <h1>{product.distance}</h1>
              </Col>
              <Col>
                <h6>EST. TRAVEL TIME</h6>
                <h1>{product.time}</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutDiscription;
