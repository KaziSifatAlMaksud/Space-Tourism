import React from "react";
import image3 from "../image/background-crew-desktop.jpg";
import info from "../info";
import Discription from "../componant/Discription";
import { useParams } from "react-router-dom";
const CrewScreen = () => {
  const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);
  return (
    <div>
      return (
      <div
        className="background-img"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <h1>{product.name}</h1>
        <Discription id={id} />
      </div>
      );
    </div>
  );
};

export default CrewScreen;
