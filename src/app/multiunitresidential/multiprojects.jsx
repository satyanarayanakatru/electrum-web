import React from "react";
import Image from "next/image";
import MultiProjectImage from "../../../public/images/multi-project.png";
import './multiprojects.css';

function MultiProject() {
  return (
    <div className="multi-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="multi-project-inner-content">
        <div className="multi-left-content">
          <h6 className="mb-3"><b className="project-inner-heading">Company Name:</b> The City of Lougheed, Burnaby BC, Canada</h6>
          <p className="mb-3"><b className="project-inner-heading">Location:</b>Coquitlam </p>
          <p><b className="project-inner-heading">Chargers: <span className="chargers">Kinglanding (4th is Kinglanding (retrofit))</span></b></p>
          {/* <ul>
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
          </ul> */}
          <h5 className="m-3">yet to update <span className="text-danger">*</span></h5>
        </div>
        <div>
          <Image src={MultiProjectImage} className="multi-image"/>
        </div>
      </div>
    </div>
  );
}

export default MultiProject;

