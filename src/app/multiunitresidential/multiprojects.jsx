import React from "react";
import Image from "next/image";
import MultiProjectImage from "../../../public/images/multi-project.png";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import './multiprojects.css';

function MultiProject() {
  return (
    <div className="multi-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="multi-project-inner-content">
        <div className="multi-left-content">
          <h6 className="mb-3"><b className="project-inner-heading">Developer:</b> The City of Lougheed, Burnaby BC, Canada</h6>
          <p className="mb-3"><b className="project-inner-heading">Location:</b> Coquitlam </p>
          <p><b className="project-inner-heading">Chargers: <span className="chargers"></span></b></p>
          <h5 className="m-3">yet to update <span className="text-danger">*</span></h5>
        </div>
        <div>
          <Image src={MultiProjectImage} className="multi-image"/>
        </div>
      </div>
      <div className="multi-project-inner-content">
      <div>
          <Image src={WorkPlaceProjectImage2} className="multi-image" />
        </div>
        <div className="multi-left-content ml-5">
          <h6 className="mb-3"><b className="project-inner-heading">Developer:</b> Kinglanding (4th is Kinglanding (retrofit) MURB)</h6>
          <p className="mb-3"><b className="project-inner-heading">Location:</b> Surrey </p>
          <p><b className="project-inner-heading">Chargers: <span className="chargers"></span></b></p>
          <h5 className="m-3">yet to update <span className="text-danger">*</span></h5>
        </div>
       
      </div>
      <div className="multi-project-inner-content">
        <div className="multi-left-content">
        <ul>
            <li>
              Successfully deployed and deployed 40 Level II chargers and 2 DCFC
              charger that are connected and managed by Electrum’s network
              platform.
            </li>
            <li>
              Customized software, enabling management to notify customers when
              a charge is complete through text/email alerts, and notify parking
              management if an EV had not vacated after a charge was completed
            </li>
            <li>
              Opportunity to capitalize on TransLink’s bus depot development for
              300 electric-battery busses.
            </li>
          </ul>
        </div>
        <div>
          <Image src={WorkPlaceProjectImage} className="multi-image"/>
        </div>
      </div>
    </div>
  );
}

export default MultiProject;

