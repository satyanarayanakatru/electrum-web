/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Image from "next/image";
import pageTest1 from "../../../public/images/page-test1.svg";
import pageTest2 from "../../../public/images/page-test2.svg";
import pageTest3 from "../../../public/images/page-test3.svg";
import EndToEnd from "../../components/endtoend";
import SomeOfOurProjects from "../../components/someofourprojects";
import GetInTouch from "../../components/getintouch";
import FleetProjects from "./fleetprojects";
import "../globals.css";


// eslint-disable-next-line react/display-name
export default function () {
  return (
    <div>
      <div className="electrum-banner page-banner">
        <div className="banner-overlay"></div>
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Fleet</h1>
          </div>
          <div className="banner-text">
            <p>
              We conduct detailed assessments to create a customized
              electrification plan for your fleet. We design and install robust
              charging infrastructure to support the demands of electric fleets.
            </p>
          </div>
        </div>
        <div className="featured-img-div car-fleet"></div>
      </div>
      <div className="services-info">
        <h2>Services</h2>
        <div className="services-info-main-content">
            <div className="services-info-inner-content">
              <h4>Car Sharing</h4>
              <p>Yet to Update *</p>
            </div>
            <div className="services-info-inner-content">
              <h4>Transportation</h4>
              <p>Yet to Update *</p>
            </div>
            <div className="services-info-inner-content">
              <h4>Logistics</h4>
              <p>Yet to Update *</p>
            </div>
          </div>
      </div>
      <div className="page-info-icons page-info-main-content">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pageTest1}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>ON-SITE ASSESSMENT</h3>
            <p>
              Professional assessment of your home and charging needs with no
              additional fees.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pageTest2}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>TESLA & PORSCHE CERTIFIED</h3>
            <p>
              Electrum is a preferred installation partner certified by Tesla,
              Porche, and more.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pageTest3}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>QUICK INSTALLATION</h3>
            <p>
              Our skilled technicians ensure a proper installation that’s done
              cleanly and quickly.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pageTest1}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>WARRANTY & GUARANTEE</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <FleetProjects/>
      <GetInTouch />
    </div>
  );
}
