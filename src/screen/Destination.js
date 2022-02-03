import React from "react";
import { useParams } from "react-router-dom";
import info from "../info";
import image2 from "../image/background-destination-desktop.jpg";
import Discription from "../componant/Discription";
import SmallNav from "../componant/SmallNav";
import { Col, Row } from "react-bootstrap";
const Destination = () => {
  const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);

  return (
    <div
      className="background-img "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className="DstinatList">
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
      </div>
    </div>
  );
};

export default Destination;
