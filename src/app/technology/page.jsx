import React from "react";
import "../globals.css";
import Image from "next/image";
import NetworkPlatform from "../../../public/Network-platform.jpg";
import MobileImage1 from "../../../public/mobile1.jpg";
import MobileImage2 from "../../../public/mobile2.jpg";
import LaptopImage1 from "../../../public/laptop1.jpg";
import LaptopImage2 from "../../../public/laptop2.jpg";

function Technology() {
  return (
    <div>
      <div className="technology-banner page-banner">
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Technology</h1>
          </div>
          <div className="technology-banner-text">
            <p>Our custom built charging network management platform.</p>
          </div>
        </div>
      </div>
      <h3 className="technology-heading">Mobile Perspective</h3>

      <div className="d-flex justify-between mobile-images">
        <div>
          <Image src={MobileImage1} alt="mobile image" />
        </div>
        <div>
          <Image src={MobileImage2} alt="mobile image" />
        </div>
      </div>
      <h3 className="technology-heading">Laptop Perspective</h3>

      <div className="d-flex justify-between laptop-images">
        <div>
          <Image src={LaptopImage1} alt="laptop image" />
        </div>
        <div>
          <Image src={LaptopImage2} alt="laptop image" />
        </div>
      </div>
      <div className="technology-content">
        <Image src={NetworkPlatform} alt="network-image" />
      </div>
    </div>
  );
}

export default Technology;
