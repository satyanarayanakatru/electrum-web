/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Image from "next/image";
import DollarDownArrow from "../../../public/dollar-downarrow.jpg";
import Speedometer from "../../../public/speedometer.jpg";
import LeafDollar from "../../../public/leaf-dollar.jpg";
import Globe from "../../../public/globe.jpg";
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
      <div className="page-info-icons page-info-main-content">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={DollarDownArrow}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Reduced Operating Costs</h3>
            <p>
              <b className="font-bold">Benefit:</b> Lower fuel and maintenance expenses compared to
              traditional vehicles.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Speedometer}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Increased Efficiency</h3>
            <p>
              <b className="font-bold">Benefit:</b> Optimize route planning and reduce downtime with
              reliable, fast charging.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={LeafDollar}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Generate Carbon Credits</h3>
            <p>
              <b className="font-bold">Benefit:</b> Earn carbon credits by reducing emissions, which
              can be sold or used to offset other environmental impacts.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Globe}
              width={100}
              height={100}
              className="page-icon"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Improved Environmental Impact</h3>
            <p>
              <b className="font-bold">Benefit:</b> Reduce your fleet’s carbon footprint and support
              sustainability goals.
            </p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <FleetProjects />
      <GetInTouch />
    </div>
  );
}
