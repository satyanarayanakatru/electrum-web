"use client";
import React from "react";
import Image from "next/image";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo1 from "../../public/images/logo1.png";
import Logo2 from "../../public/images/logo2.png";
import Logo3 from "../../public/images/logo3.png";
import Logo4 from "../../public/images/logo4.png";
import Logo5 from "../../public/images/logo5.png";
import Logo6 from "../../public/images/logo6.png";
import "./brandsliders.css";


function BrandSliders() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-image">
          <Image src={Logo1} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Logo2} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Logo3} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Logo4} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Logo5} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Logo6} alt="logo" />
        </div>
      </Slider>
    </div>
  );
}

export default BrandSliders;
