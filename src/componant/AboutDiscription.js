import React from "react";
import { useParams } from "react-router-dom";
import info from "../info";
import Discription from "../componant/Discription";
import SmallNav from "../componant/SmallNav";
import { Col, Row } from "react-bootstrap";

const AboutDiscription = () => {
  const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);
  return (
    <>
      <div className="DstinatList">
        <Row>
          <Col className="dst">
            <Row>
              <h1>{product.heade6}</h1>
            </Row>
            <Row>
              <Discription id={id} />
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
