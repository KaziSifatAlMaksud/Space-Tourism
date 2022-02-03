import React from "react";
import { useParams } from "react-router-dom";
import info from "../info";
import image2 from "../image/background-destination-desktop.jpg";

import AboutDiscription from "../componant/AboutDiscription";
const Destination = () => {
  const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);
  console.log(product);
  return (
    <div
      className="background-img "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <AboutDiscription />
    </div>
  );
};

export default Destination;
