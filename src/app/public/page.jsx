import React from "react";
import Image from "next/image";
import MapLocation from "../../../public/map-location.jpg";
import Recycle from "../../../public/recycle.jpg";
import CoinStack from "../../../public/coin-stack.jpg";
import BuildingStar from "../../../public/building-star.jpg";
import pagePublicTest2 from "../../../public/images/page-public-test2.svg";
import EndToEnd from "../../components/endtoend";
import SomeOfOurProjects from "../../components/someofourprojects";
import GetInTouch from "../../components/getintouch";
import PublicProject from "./public-project";
import "./page.css";
import "../globals.css";

export default function Public() {
  return (
    <div>
      <div className="electrum-banner page-banner">
        <div className="page-banner-text">
          <div className="banner-title">
            <h1>Public</h1>
          </div>
          <div className="banner-text">
            <p>
              We design, deploy, and manage public charging stations to create
              an accessible EV charging network. We work with local governments
              and municipalities to support EV infrastructure deployment and
              policy development.
            </p>
          </div>
        </div>
        <div className="featured-img-div car-public"></div>
      </div>

      <div className="page-info-icons page-info-main-content">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={MapLocation}
              width={100}
              height={100}
              className="page-icon"
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Attract Eco-Tourists</h3>
            <p>
              Draw in environmentally-conscious travelers looking for convenient
              charging options, boosting local tourism and supporting green
              travel.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={BuildingStar}
              width={100}
              height={100}
              className="page-icon"
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Enhance Property Appeal</h3>
            <p>
              Modernize your property with green infrastructure, making it more
              attractive to tenants and visitors.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={Recycle}
              width={100}
              height={100}
              className="page-icon"
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Support Sustainability</h3>
            <p>
              Contribute to environmental goals by promoting the use of electric
              vehicles and reducing carbon emissions.
            </p>
          </div>
        </div>

        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={CoinStack}
              width={100}
              height={100}
              className="page-icon"
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>Generate Revenue</h3>
            <p>
              Create a new income stream through charging fees, encouraging
              longer stays, and generating carbon credits.
            </p>
          </div>
        </div>
      </div>
      <EndToEnd />
      <PublicProject />
      <GetInTouch />
    </div>
  );
}
