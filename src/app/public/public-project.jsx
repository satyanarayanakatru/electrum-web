import React from "react";
import Image from "next/image";
import PublicProjectImage from "../../../public/images/public-project.png";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import "./public-project.css";

function PublicProject() {
  return (
    <div className="public-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="public-project-inner-content">
        <div className="public-left-content">
          <h6 className="mb-3">
            <b className="project-inner-heading">Company Name:</b> Pacific Coach
            Lines / Air Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Surrey
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers: <span className="chargers">4 ports 120KWH</span>
            </b>
          </p>
          <h5 className="m-3">
            yet to update <span className="text-danger">*</span>
          </h5>
        </div>
        <div>
          <Image src={PublicProjectImage} className="public-image" />
        </div>
      </div>
      <div className="public-project-inner-content">
        <div>
          <Image src={WorkPlaceProjectImage2} className="public-image" />
        </div>
        <div className="public-left-content ml-5">
          <h6 className="mb-3">
            <b className="project-inner-heading">Company Name:</b> Richmond
            Hospital, Richmond BC, Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Richmond{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers: <span className="chargers">4 (Public)</span>
            </b>
          </p>
        </div>
      </div>
      <div className="public-project-inner-content">
        <div className="public-left-content ml-5">
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
        <div className="mr-5">
          <Image src={WorkPlaceProjectImage} className="public-image" />
        </div>
      </div>
    </div>
  );
}

export default PublicProject;
