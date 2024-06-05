import React from "react";
import Image from "next/image";
import aboutImage from "../../public/images/about-image1.png";
import pageExample from "../../public/images/page-example.png";
import MultiProjectImage from "../../public/images/multi-project.png";
import "./someofourprojects.css";

const SomeOfOurProjects = () => {
  const projects = [
    {
      id: 1,
      Developer: "Kinglanding (4th is Kinglanding (retrofit) MURB)",
      Location: "Surrey",
      Chargers: "yet to update",
      Image: MultiProjectImage,
    },
    {
      id: 2,
      Developer: "The City of Lougheed, Burnaby BC, Canada",
      Location: "Coquitlam",
      Chargers: "yet to update",
      Image: MultiProjectImage,
    },
    
  ];
  return (
    <div>
      <h2 className="project-heading">Some Of Our Projects</h2>

      {projects.map((items, index) => {
        return (
          <div key={index} className="multi-project">
            <div className="multi-project-inner-content">
              <div className="multi-left-content">
                <h6 className="mb-3" key={items.id}>
                  <b className="project-inner-heading">Developer:</b>{" "}
                  {items.Developer}
                </h6>
                <p className="mb-3">
                  <b className="project-inner-heading">Location:</b>{" "}
                  {items.Location}
                </p>
                <p>
                  <b className="project-inner-heading">
                    Chargers: <span className="chargers">{items.Chargers}</span>
                  </b>
                </p>
              </div>
              <div>
                <Image
                  src={items.Image}
                  className="multi-image"
                  alt="multi-image"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SomeOfOurProjects;
