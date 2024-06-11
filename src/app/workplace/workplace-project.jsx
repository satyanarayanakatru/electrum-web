import React from "react";
import Image from "next/image";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import "./workplace-project.css";
import MoreProjects from "@/moderncomponents/moreProjects";

function WorkplaceProject() {
  return (
    <div className="workplace-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="workplace-project-inner-content">
        <div className="workplace-left-content">
          <h6 className="mb-3">
            {/* <b className="project-inner-heading">Company Name:</b>  */}
            Richmond
            Hospital
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Richmond BC,
            Canada{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers:<span className="chargers"> 40 Workplace Chargers</span>
            </b>
          </p>
        </div>
        <div>
          <Image
            src={WorkPlaceProjectImage2}
            className="workplace-image"
            alt="workproject-image"
          />
        </div>
      </div>
      <div className="workplace-project-inner-content">
        <div className="mr-5">
          <Image
            src={WorkPlaceProjectImage}
            className="workplace-image"
            alt="workproject-image"
          />
        </div>
        <div className="workplace-left-content ml-5">
          <ul className="ml-5 font-light">
            <li>
              Successfully installed 40 Level 2 chargers and 2 DCFC chargers,
              all managed through Electrum’s network platform.
            </li>
            <li>
              Our customized software notifies customers via text/email when
              charging is complete and alerts parking management if an EV
              remains parked post-charge.
            </li>
          </ul>
        </div>
      </div>
      <MoreProjects/>
    </div>
  );
}

export default WorkplaceProject;
