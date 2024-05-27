import React from "react";
import Image from "next/image";
import FleetProject from "../../../public/images/fleet-project.png";
import './fleetprojects.css';

function FleetProjects() {
  return (
    <div className="fleet-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="fleet-project-inner-content">
        <div className="fleet-left-content">
          <h6 className="mb-3"><b className="project-inner-heading">Company Name:</b> Pacific Coach Lines/ Air Canada</h6>
          <p className="mb-3"><b className="project-inner-heading">Location:</b> Surrey</p>
          <p><b className="project-inner-heading">Chargers:</b></p>
          <ul>
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
          <Image src={FleetProject} className="fleet-image"/>
        </div>
      </div>
    </div>
  );
}

export default FleetProjects;
