import React from "react";
import Image from "next/image";
import MultiProjectImage from "../../../public/images/multi-project.png";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
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
          <Image
            src={MultiProjectImage}
            className="multi-image"
            alt="multi-image"
          />
        </div>
      </div>
      <div className="multi-project-inner-content">
        <div>
          <h2>Image</h2>
          <h2>yet to update</h2>
        </div>
        <div className="multi-left-content">
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
    </div>
  );
}

export default MultiProject;
