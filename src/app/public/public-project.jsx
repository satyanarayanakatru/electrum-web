import React from "react";
import Image from "next/image";
import PublicProjectImage from "../../../public/public-project.png";
import PublicProjectImage2 from "../../../public/public-project2.jpg";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import "./public-project.css";
import MoreProjects from "@/moderncomponents/moreProjects";

function PublicProject() {
  return (
    <div className="public-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="public-project-inner-content">
        <div className="public-left-content">
          <h6 className="mb-3">
            <b className="project-inner-heading">Customer Name: </b>
            Surrey Elite Auto Spa
          </h6>
          <p className="mb-3">
            <b className="project-inner-heading">Location:</b> Surrey
          </p>
          <p>
            <b className="project-inner-heading">
              Chargers: <span className="chargers">4 ports 120KWH</span>
            </b>
          </p>
         
        </div>
        <div className="public-project-image">
          <Image
            src={PublicProjectImage2}
            className="public-image"
            alt="public-image"
            
          />
        </div>
      </div>
      <div className="public-project-inner-content">
        <div>
          <Image
            src={PublicProjectImage}
            className="public-image"
            alt="public-image"
          />
        </div>
        <div className="public-left-content ml-5">
          <h6 className="mb-3">
            Landmark Properties (Foster Martin), White Rock, BC
          </h6>
          <p className="font-light">
            At Landmark Properties, Foster Martin, Electrum installed 10 QR
            code-activated public Level 2 chargers in a commercial parkade and
            provided RFID fob access for regular residential use. This hybrid
            model offers flexibility for both public and resident charging
            needs.
          </p>
        </div>
      </div>
      {/* <div className="public-project-inner-content">
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
          </ul>
        </div>
        <div className="mr-5">
          <Image
            src={WorkPlaceProjectImage}
            className="public-image"
            alt="public-image"
          />
        </div>
      </div> */}
      <MoreProjects />
    </div>
  );
}

export default PublicProject;
