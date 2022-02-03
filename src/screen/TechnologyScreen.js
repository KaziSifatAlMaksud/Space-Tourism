import React from 'react';
import { useParams } from 'react-router-dom';
import info from '../info';
import image3 from '../image/background-technology-desktop.jpg';
import Discription from '../componant/Discription';
const TechnologyScreen = () => {
    const { id } = useParams();
  console.log(id);
  const product = info.find((x) => x._id === id);
  return <div>
       

  return (<div
      className="background-img"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <h1>{product.name}</h1>
      <Discription id={id} />
    </div>
  );
  </div>;
};

export default TechnologyScreen;
