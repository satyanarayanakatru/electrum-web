import React from "react";
import Image from "next/image";
import SingleProjectImage from "../../../public/images/single-project.png";
import './single-project.css';

function SingleProject() {
  return (
    <div className="single-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      {/* <div className="single-project-inner-content">
        <div className="single-left-content">
          <h6 className="mb-3"><b className="project-inner-heading">Company Name:</b> Richmond Hospital, Richmond BC, Canada</h6>
          <p className="mb-3"><b className="project-inner-heading">Location:</b>Richmond </p>
          <p><b className="project-inner-heading">Chargers: <span className="chargers"></span></b></p>
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
          <Image src={SingleProjectImage} className="single-image"/>
        </div>
      </div> */}
          <h1 className="m-3 single-heading">yet to update <span className="text-danger">*</span></h1>

    </div>
  
  );
}

export default SingleProject;