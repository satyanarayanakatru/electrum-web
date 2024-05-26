import React from "react";
import Image from "next/image";
import pagePublicTest1 from "../../../public/images/page-public-test1.svg";
import pagePublicTest2 from "../../../public/images/page-public-test2.svg";
import SomeOfOurProjects from "../../components/someofourprojects";
import EndToEnd  from "../../components/endtoend";
import GetInTouch  from "../../components/getintouch";
import "./page.css";

export default function SingleFamilyResidential() {
  return (
    <div class="" id="content" component="content">
      <div className="electrum-page">
        <div className="electrum-banner page-banner">
          <div className="banner-overlay"></div>
          <div className="page-banner-text">
            <div className="banner-title">
              <h1>Single-family residential</h1>
            </div>
            <div className="banner-text">
              <p>
                We work with homeowners to assess their unique EV charging
                requirements. With on-site consultation and training, we provide
                safe and hassle-free charging solutions for all.
              </p>
            </div>
          </div>
          <div 
            class="featured-img-div car-single"
          >
          </div>
        </div>
        <div className="page-info-icons">
          <div className="icon-div">
            <div className="page-icon-div">
              <Image
                src={pagePublicTest1}
                width={100}
                height={100}
                className="page-icon"
              />
            </div>
            <div className="page-icon-info-div">
              <h3>On-site assessment</h3>
              <p>
                Professional assessment of your home and charging needs with no
                additional fees.
              </p>
            </div>
          </div>

          <div className="icon-div">
            <div className="page-icon-div">
              <Image
                src={pagePublicTest2}
                width={100}
                height={100}
                className="page-icon"
              />
            </div>
            <div className="page-icon-info-div">
              <h3>TESLA & PORCHE CERTIFIED</h3>
              <p>
                Electrum is a preferred installation partner certified by Tesla,
                Porche, and more.
              </p>
            </div>
          </div>

          <div className="icon-div">
            <div className="page-icon-div">
              <Image
                src={pagePublicTest1}
                width={100}
                height={100}
                className="page-icon"
              />
            </div>
            <div className="page-icon-info-div">
              <h3>Quick installation</h3>
              <p>
                Our skilled technicians ensure a proper installation that’s done
                cleanly and quickly.
              </p>
            </div>
          </div>

          <div className="icon-div">
            <div className="page-icon-div">
              <Image
                src={pagePublicTest2}
                width={100}
                height={100}
                className="page-icon"
              />
            </div>
            <div className="page-icon-info-div">
              <h3>Warranty & guarantee</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
        <EndToEnd/>
        <SomeOfOurProjects/>
        <GetInTouch/>
      </div>
    </div>
  );
}
