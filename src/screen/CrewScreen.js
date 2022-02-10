import React from "react";
import image3 from "../image/background-crew-desktop.jpg";
import crew from '../crew';
import { useParams } from "react-router-dom";
import AboutCrew from "../componant/AboutCrew";
const CrewScreen = () => {
  const { id } = useParams();
  console.log(id);
  const product = crew.find((x) => x._id === id);
  return (
    <div>
      return (
      <div
        className="background-img"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <AboutCrew id={id} />
      </div>
      );
    </div>
  );
};

export default CrewScreen;
