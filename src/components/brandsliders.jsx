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
import Polygon from "../../public/polygon-logo.png";
import Aquilini from "../../public/Aquilini-logo.jpg";
import Peterbilt from "../../public/Peterbilt-logo.png";
import Pepsi from "../../public/Pepsi-logo.png";
import Universal from "../../public/Universal-logo.png";
import AirCanada from "../../public/AirCanada-logo.png";
import Rancho from "../../public/Rancho-logo.jpg";
import District from "../../public/District-logo.jpg";
import GWL from "../../public/gwl.jpg";
import "./brandsliders.css";


function BrandSliders() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 4000,
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
      <h2 className="brand-heading">Our Partners and Clients</h2>
      <Slider {...settings} className="slider-main">
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
        <div className="slider-image">
          <Image src={Polygon} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Aquilini} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Peterbilt} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Pepsi} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Universal} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={AirCanada} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={Rancho} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={District} alt="logo" />
        </div>
        <div className="slider-image">
          <Image src={GWL} alt="logo" />
        </div>
      </Slider>
    </div>
  );
}

export default BrandSliders;
