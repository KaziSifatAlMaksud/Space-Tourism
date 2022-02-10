import React from 'react';
import crew from "../crew";
const AboutCrew = ({ id }) => {
    const product = crew.find((x) => x._id === id);
    return (
      <>
        <div className="discrHome">
          <h1 className="display-1 homeTitle py-2"> {product.name}</h1>
          <p className="py-3">{product.discrptioin}</p>
        </div>
      </>
    );
  };
  
export default AboutCrew;
