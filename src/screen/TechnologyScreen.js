import React from "react";
import { useParams } from "react-router-dom";
import AboutTechnology from "../componant/AboutTechnology";
import image3 from "../image/background-technology-desktop.jpg";
import Discription from "../componant/Discription";
import technology from "../technology";
const TechnologyScreen = () => {
  const { id } = useParams();
  const product = technology.find((x) => x._id === id);
  return (
    <div>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <AboutTechnology />
      </div>
    </div>
  );
};

export default TechnologyScreen;
