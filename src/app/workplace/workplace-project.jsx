import React from "react";
import Image from "next/image";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";

import "./workplace-project.css";

function WorkplaceProject() {
  return (
    <div className="workplace-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="workplace-project-inner-content">
        <div className="workplace-left-content">
          <h6 className="mb-3">
            <b className="project-inner-heading">Company Name:</b> Richmond
            Hospital, Richmond BC, Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Richmond{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers:<span className="chargers"> 4 (Private)</span>
            </b>
          </p>
        </div>
        <div>
          <Image src={WorkPlaceProjectImage2} className="workplace-image" />
        </div>
      </div>
      <div className="workplace-project-inner-content">
        <div className="mr-5">
          <Image src={WorkPlaceProjectImage} className="workplace-image" />
        </div>
        <div className="workplace-left-content ml-5">
          <ul className="ml-5">
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
      </div>
    </div>
  );
}

export default WorkplaceProject;
