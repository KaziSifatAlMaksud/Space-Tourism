import React from "react";
import image from "../image/background-home-desktop.jpg";

const HomeScreen = () => {
  return (
    <div
      className="background-img"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="discrHome">
        <h2>SO, YOU WANT TO TRAEL TO</h2>
        <h1 className="display-1 homeTitle py-2">SPACE</h1>
        <p className="py-3">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
