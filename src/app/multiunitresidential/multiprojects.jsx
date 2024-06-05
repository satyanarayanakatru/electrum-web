import React from "react";
import Image from "next/image";
import MultiProjectImage from "../../../public/images/multi-project.png";
import KingLanding from "../../../public/Kings_Landing.jpg";
import KingLanding2 from "../../../public/Kings_Landing2.jpg";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import SomeOfOurProjects from "@/components/someofourprojects";
function MultiProject() {
  return (
    <div className="multi-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="multi-project-inner-content">
        <div className="multi-left-content">
          <h6 className="mb-3">
            <b className="project-inner-heading">Developer:</b> Kinglanding (4th
            is Kinglanding (retrofit) MURB)
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Surrey{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers: <span className="chargers"></span>
            </b>
          </p>
          <h5 className="m-3">
            yet to update <span className="text-danger">*</span>
          </h5>
        </div>
        <div>
          <Image src={KingLanding} className="multi-image" alt="multi-image" />
        </div>
      </div>
      <div className="multi-project-inner-content">
        <div className="mr-5">
          <Image src={KingLanding2} className="multi-image" alt="multi-image" />
        </div>
        <div className="multi-left-content ml-5">
          <h6 className="mb-3">
            <b className="project-inner-heading">Developer:</b> The City of
            Lougheed, Burnaby BC, Canada
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Coquitlam{" "}
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers: <span className="chargers"></span>
            </b>
          </p>
          <h5 className="m-3">
            yet to update <span className="text-danger">*</span>
          </h5>
        </div>
      </div>
      {/* <SomeOfOurProjects/> */}
    </div>
  );
}

export default MultiProject;
