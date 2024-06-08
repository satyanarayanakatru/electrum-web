import React from "react";
import Image from "next/image";
import Globe from "../../../public/globe-tick.jpg";
import Dollar from "../../../public/dollar.jpg";
import Like from "../../../public/like.jpg";
import Magnet from "../../../public/magnet-2.jpg";
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
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Workplace</h1>
          </div>
          <div className="banner-text">
            <p>
              We work with you to determine the optimal charging solutions for
              your workplace. Our team manages everything, from design to
              installation and ongoing operation of the chargers, providing
              turnkey solutions for charging infrastructure.
            </p>
          </div>
        </div>
        <div className="featured-img-div car-workplace"></div>
      </div>
      <div className="page-info-icons">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Magnet}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3 className="workplace-page-icon-heading">Attract and Retain Talent</h3>
            <p>
              Draw in eco-conscious employees with sustainable workplace
              amenities.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Dollar}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3 className="workplace-page-icon-heading">Increase Property Value</h3>
            <p>
              Enhance your property&apos;s value with modern, green
              infrastructure.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Like}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3 className="workplace-page-icon-heading">Boost Employee Satisfaction</h3>
            <p>
              Provide convenient charging options, enhancing employee
              satisfaction and retention.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Globe}
              width={100}
              height={100}
              className="page-icon"
              alt="page-image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3 className="workplace-page-icon-heading">Support Sustainability Goals</h3>
            <p>
              Contribute to your company&apos;s environmental initiatives and
              carbon reduction targets.
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
