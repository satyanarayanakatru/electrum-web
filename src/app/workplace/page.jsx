import React from "react";
import Image from "next/image";
import pagePublicTest1 from "../../../public/images/page-public-test1.svg";
import pagePublicTest2 from "../../../public/images/page-public-test2.svg";
import EndToEnd from "../../components/endtoend";
import SomeOfOurProjects from "../../components/someofourprojects";
import GetInTouch from "../../components/getintouch";
import WorkplaceProject from "./workplace-project";
import "../globals.css";

export default function WorkPlace() {
  return (
    <div>
      <div className="electrum-banner page-banner">
        <div className="banner-overlay"></div>
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Workplace</h1>
          </div>
          <div className="banner-text">
            <p>
              We conduct through evaluations of your workplace to determine the
              optimal locations for EV chargers. Our team handles everything
              from design to installation, ensuring a seamless setup of charging
              stations.
            </p>
          </div>
        </div>
        <div className="featured-img-div car-workplace"></div>
      </div>
      <div className="page-info-icons">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest1}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>INCREASE VALUE</h3>
            <p>
              Having EV charging increases the value of your building and
              attracts tenants.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest2}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>RETAIN TALENT</h3>
            <p>
              Being able to top off at work can be a key perk to attract and
              retain employees.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest1}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>LOREM IPSUM</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest2}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>LOREM IPSUM</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <WorkplaceProject />
      <GetInTouch />
    </div>
  );
}
