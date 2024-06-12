// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";

const Banner = () => {
  return (
    <section>
      <Carousel autoPlay infiniteLoop axis="vertical">
        <div className="min-h-screen">
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
