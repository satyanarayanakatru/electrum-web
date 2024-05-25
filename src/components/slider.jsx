"use client";
import React from "react";
import "./slider.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo1 from "../../public/images/logo1.png";
import Logo2 from "../../public/images/logo2.png";
import Logo3 from "../../public/images/logo3.png";
import Logo4 from "../../public/images/logo4.png";
import Logo5 from "../../public/images/logo5.png";
import Logo6 from "../../public/images/logo6.png";
import Image from "next/image";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: true,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-image">
          <Image src={Logo1} />
        </div>
        <div className="slider-image">
          <Image src={Logo2} />
        </div>
        <div className="slider-image">
          <Image src={Logo3} />
        </div>
        <div className="slider-image">
          <Image src={Logo4} />
        </div>
        <div className="slider-image">
          <Image src={Logo5} />
        </div>
        <div className="slider-image">
          <Image src={Logo6} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
