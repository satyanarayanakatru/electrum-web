import React from "react";
import Image from "next/image";
import FleetProject from "../../../public/images/fleet-project2.jpeg";
import FleetProject3 from "../../../public/fleet-project3.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import "./fleetprojects.css";
import MoreProjects from "@/moderncomponents/moreProjects";

function FleetProjects() {
  return (
    <div className="fleet-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="fleet-project-inner-content">
        <div className="fleet-left-content">
          <h6 className="mb-3">
            {/* <b className="project-inner-heading">Company Name:</b> */}
             Pacific Coach
            Lines/ Air Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Surrey
          </p>
          <p>
            <b className="project-inner-heading">Chargers:</b> <span className="chargers text-dark">2 Chargers</span>
          </p>
          <ul className="font-light">
            <li>
              Electrum deployed the first fast-charger for city public transit
              in Vancouver, consisting of 2 chargers that are now on Electrum’s
              network platform.
            </li>
            <li>
              Electrum is working with ABB and TransLink to service their
              Pantograph 480 kWh supply units for their services from Vancouver
              to New Westminster.
            </li>
            <li>
              Opportunity to capitalize on TransLink’s bus depot development for
              300 electric-battery busses.
            </li>
          </ul>
        </div>
        <div>
          <Image src={FleetProject} className="fleet-image" />
        </div>
      </div>
      <div className="fleet-project-inner-content">
        <div className="fleet-project3 mr-5">
          <Image
            src={FleetProject3}
            className="multi-image"
            alt="multi-image"
          />
        </div>
        <div className="fleet-left-content ml-5">
          <h6 className="mb-3">
            {/* <b className="project-inner-heading">Company Name:</b>  */}
            Frito Lay
            Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Surrey, BC,
            Canada{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers:
              <span className="chargers text-dark"> 1 DCFC, 10 Level II</span>
            </b>
          </p>
          <div className="mt-2 font-light">
            <b>Project Summary: </b>
            <ul>
              <li>
                <b className="font-bold">Comprehensive Charging Infrastructure:</b> Installed a 120kW
                DC fast charger and ten Level II chargers to support Frito Lay
                Canada&apos;s fleet electrification.
              </li>
              <li>
                <b className="font-bold">High-Power DC Fast Charging:</b> Enables quick recharges,
                reducing downtime and keeping delivery schedules on track.
              </li>
              <li>
                <b className="font-bold">Efficient Level II Charging:</b> Provides reliable overnight
                charging, ensuring vehicles are ready for daily operations.
              </li>
              <li>
                <b className="font-bold">Sustainability Impact:</b> Helps Frito Lay Canada reduce
                their carbon footprint and achieve their sustainability goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <MoreProjects />
    </div>
  );
}

export default FleetProjects;
