import React from "react";
import Image from "next/image";
import Process from "../../public/images/process.svg";
import Installation from "../../public/images/installation.svg";
import Energy from "../../public/images/energy.svg";
import Billing from "../../public/images/billing.svg";
import Maintenance from "../../public/images/maintenance.svg";
import processArrow from "../../public/images/process-arrow.svg";
import processBottomArrow from "../../public/images/process-bottom-arrow.svg";
import "./endtoend.css";

const EndToEnd = () => {
  return (
    <div>
      <div className="process-div">
        <div className="process-card-div visible-lg hidden-md hidden-sm hidden-xs">
          <h2>End-to-end processes</h2>
          <div className="card-container">
            <div className="process-card">
              <div className="process-img-div">
                <Image src={Process} className="process-img" alt="process" />
              </div>
              <div className="process-info">
                <p>1. Process & Design</p>
              </div>
            </div>

            <Image
              className="process-arrow"
              src={processArrow}
              width={10}
              height={10}
              alt="process"
            />

            <div className="process-card">
              <div className="process-img-div">
                <Image
                  className="process-img"
                  src={Installation}
                  alt="process"
                />
              </div>
              <div className="process-info">
                <p>2. Installation</p>
              </div>
            </div>
            <Image className="process-arrow" src={processArrow} alt="process" />

            <div className="process-card">
              <div className="process-img-div">
                <Image className="process-img" src={Energy} alt="process" />
              </div>
              <div className="process-info">
                <p>3. Energy Management</p>
              </div>
            </div>

            <Image className="process-arrow" src={processArrow} alt="process" />

            <div className="process-card">
              <div className="process-img-div">
                <Image src={Billing} className="process-img" alt="process" />
              </div>
              <div className="process-info">
                <p>4. Access & Billing</p>
              </div>
            </div>

            <Image className="process-arrow" src={processArrow} alt="process" />

            <div className="process-card">
              <div className="process-img-div">
                <Image
                  src={Maintenance}
                  className="process-img"
                  alt="process"
                />
              </div>
              <div className="process-info">
                <p>5. Monitoring and Maintenance</p>
              </div>
            </div>

            <div className="process-bottom-arrow-div">
              <Image
                className="process-bottom-arrow"
                src={processBottomArrow}
                alt="process"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndToEnd;
