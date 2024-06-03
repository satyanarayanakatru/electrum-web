import React from "react";
import Image from "next/image";
import pagePublicTest1 from "../../../public/images/page-public-test1.svg";
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
      <div className="public-services-info">
        <h2>Services</h2>
        <div className="public-services-info-main-content">
          <div className="public-services-info-inner-content">
            <h4>Commercial</h4>
            <p>Yet to Update *</p>
          </div>
          <div className="public-services-info-inner-content">
            <h4>Shopping-Center</h4>
            <p>Yet to Update *</p>
          </div>
          <div className="public-services-info-inner-content">
            <h4>Arena</h4>
            <p>Yet to Update *</p>
          </div>
        </div>
      </div>
      <div className="page-info-icons page-info-main-content">
        <div className="icon-div">
          <div className="page-icon-div">
            <Image
              src={pagePublicTest1}
              width={100}
              height={100}
              className="page-icon"
              alt="page-public image"
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
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>ATTRACT CUSTOMERS</h3>
            <p>
              Being able to top off while shopping or dining is a key perk to
              attract customers.
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
              alt="page-public image"
            />
          </div>
          <div className="page-icon-info-div">
            <h3>QUICK INSTALLATION</h3>
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
              alt="page-public image"
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
      <PublicProject />
      <GetInTouch />
    </div>
  );
}
