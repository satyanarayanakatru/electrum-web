import React from "react";
import Image from "next/image";
import MultiProjectImage from "../../../public/images/multi-project.png";
import KingLanding from "../../../public/Kings_Landing.jpg";
import KingLanding2 from "../../../public/Kings_Landing2.jpg";
import WorkPlaceProjectImage from "../../../public/images/workplace-project.png";
import WorkPlaceProjectImage2 from "../../../public/images/single-project.png";
import SomeOfOurProjects from "@/components/someofourprojects";
import MoreProjects from "@/moderncomponents/moreProjects";
function MultiProject() {
  return (
    <div className="multi-project">
      <h2 className="project-heading">Some Of Our Projects</h2>
      <div className="multi-project-inner-content">
        <div className="multi-left-content">
          <h6 className="mb-3">
            Kinglanding (4th is Kinglanding (retrofit) MURB)
          </h6>
          <p className="font-light">
            At Kings Landing, Electrum undertook a comprehensive project to
            electrify 165 stalls with individual 32Amp circuits, installing 114
            EV chargers. This ambitious project required substantial electrical
            infrastructure to ensure each unit had dedicated EV charging
            capacity, exemplifying our capability to manage large-scale
            residential installations.
          </p>
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
          <h6 className="mb-3">The City of Lougheed, Burnaby BC, Canada</h6>

          <p className="font-light">
            The City of Lougheed is a prime example of how Electrum integrates
            advanced technology with community needs. We installed 38 public
            Level 2 chargers across four locations, activated by QR codes, and
            206 secure RFID residential Level 2 chargers in five residential
            towers. All chargers are managed through Electrum’s Cloud Platform
            Dashboard, facilitating efficient billing, power management, and
            carbon credit accumulation.
          </p>
        </div>
      </div>
      {/* <SomeOfOurProjects/> */}
      <MoreProjects />
    </div>
  );
}

export default MultiProject;
