import React from "react";
import Image from "next/image";
import pagePublicTest1 from "../../../public/images/page-public-test1.svg";
import pagePublicTest2 from "../../../public/images/page-public-test2.svg";
import EndToEnd from "../../components/endtoend";
import SomeOfOurProjects from "../../components/someofourprojects";
import GetInTouch from "../../components/getintouch";
import "../singlefamilyresidential/page.css";
import MultiProject from "./multiprojects";
import UncontrolledExample from "./multislider";

export default function MultiUnitResidential() {
  return (
    <div>
      <div className="electrum-banner page-banner">
        <div className="banner-overlay"></div>
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Multiple-Unit Residential Buildings</h1>
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
              src={pagePublicTest1}
              width={100}
              height={100}
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
              src={pagePublicTest2}
              width={100}
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
              src={pagePublicTest1}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>EV READY PLAN</h3>
            <p>
              Professionally drafted EV Ready Plan tailored to your building.
              Benefit from BC rebates.
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
            <h3>COST RECOVERY</h3>
            <p>
              Take advantage of government incentive programs. Set your own
              resident usage fees.
            </p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <MultiProject/>
      {/* <UncontrolledExample/> */}
      <GetInTouch />
    </div>
  );
}
