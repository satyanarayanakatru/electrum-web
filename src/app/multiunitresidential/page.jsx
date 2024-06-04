import React from "react";
import Image from "next/image";
import pagePublicTest1 from "../../../public/images/page-public-test1.svg";
import pagePublicTest2 from "../../../public/images/page-public-test2.svg";
import SE5 from "../../../public/images/SE-5.png";
import SE2 from "../../../public/images/SE-2.png";
import SE4 from "../../../public/images/SE-4.png";
import EndToEnd from "../../components/endtoend";
import SomeOfOurProjects from "../../components/someofourprojects";
import GetInTouch from "../../components/getintouch";
import MultiProject from "./multiprojects";
import "./multiprojects.css";
import "../globals.css";

export default function MultiUnitResidential() {
  return (
    <div>
      <div className="electrum-banner page-banner">
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Multi-Unit Residential Buildings</h1>
          </div>
          <div className="banner-text">
            <p>
              We tailor our services to meet the specific needs of multi-unit
              residential properties, providing scalable solutions. Our
              solutions include technology for tracking individual usage and
              managing billing for multiple residents.
            </p>
          </div>
        </div>
        <div className="featured-img-div car-multi"></div>
      </div>
      <div className="page-info-icons">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={SE5}
              width={150}
              height={150}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>SHARED OR DEDICATED</h3>
            <p>
              Shared EV charging in common parking stalls or dedicated chargers
              for each resident.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest1}
              width={80}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>BUILDINGS OF ALL AGES</h3>
            <p>
              EV infrastructure retrofitted into existing buildings or built
              into new constructions.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={SE2}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>EV READY PLAN</h3>
            <p>
            Professionally drafted and tailored to your building. Save up to 75%, while rebates available.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={SE4}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>COST RECOVERY</h3>
            <p>
            Automated billing enables cost recovery. Current Government incentives can help offset project expenses. 
            </p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <MultiProject />
      <GetInTouch />
    </div>
  );
}
