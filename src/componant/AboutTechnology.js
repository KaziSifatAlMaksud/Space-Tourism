import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import technology from '../technology';
import Discription from './Discription';
import SmallNav from './SmallNav';
const AboutTechnology = () => {
    const { id } =useParams()
      const product = technology.find((x) => x._id === id);
  return <div>
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

  </div>;
};

export default AboutTechnology;
