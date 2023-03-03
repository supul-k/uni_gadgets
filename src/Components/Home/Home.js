import React from "react";
import Carousel from "react-material-ui-carousel";
import logo from '../../images/logo.png';

const Home = () => {
    const bgImages = [logo];

  return (
    <div>
      <Carousel
        autoPlay={false}
        indicators={false}
        className="home__carousel"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        hi
        {bgImages.map((item, i) => (
        <img
          key={i}
          src={item}
          alt={`Amazon Background ${i}`}
          className="home__image"
        />
      ))}
      </Carousel>
    </div>
  );
};

export default Home;
