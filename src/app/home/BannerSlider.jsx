"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Image1 from "../../../public/images/elctrumbanner2.jpg";
import HomeBanner2 from "../../../public/home-banner2.jpeg";
import HomeBanner from "../../../public/Home-Page-Banner.jpg"
import Image3 from "../../../public/images/car-five.jpg";
import Image4 from "../../../public/images/car-two.jpg";
import Image5 from "../../../public/images/car-four.jpg";
import "./BannerSlider.css";

function BannerSlider() {
  const settings = {
    infinite: "true",
    slidestoshow: 2,
    autoPlay: true,
    speed: 1000,
    autoplayspeed: 1000,
  };

  return (
    <Carousel {...settings} className="carousel-banner">
      <Carousel.Item>
        <Image
          src={HomeBanner}
          text="First slide"
          className="img-slide"
          alt="slide-image"
        />
        <Carousel.Caption className="slider-content">
          <h3>Cutting-Edge EV Charging and Energy Management Software</h3>
          <p>Leading the Way in EV Charging and Energy Optimization</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <Image
          src={HomeBanner2}
          text="Third slide"
          className="img-slide"
          alt="slide-image"
        />
        <Carousel.Caption className="slider-content caption">
          <h3>Cutting-Edge EV Charging and Energy Management Software</h3>
          <p>Leading the Way in EV Charging and Energy Optimization</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/*
      <Carousel.Item>
        <Image
          src={Image4}
          text="Second slide"
          className="img-slide"
          alt="slide-image"
        />
        <Carousel.Caption className="slider-content caption">
          <h3>Cutting-Edge EV Charging and Energy Management Software</h3>
          <p>Leading the Way in EV Charging and Energy Optimization</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default BannerSlider;
