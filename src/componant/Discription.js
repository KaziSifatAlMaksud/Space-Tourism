import React from "react";
import info from "../info";

const Discription = ({id}) => {
  
  const product = info.find((x) => x._id === id);
  return (
    <>
      <div className="discrHome">
        <h2>{product.heade6}</h2>
        <h1 className="display-1 homeTitle py-2"> {product.name}</h1>
        <p className="py-3">{product.discrptioin}</p>
      </div>
    </>
  );
};

export default Discription;
