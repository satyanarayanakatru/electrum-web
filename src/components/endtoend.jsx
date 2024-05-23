import React from "react";
import Image from "next/image";
import processTest1 from "../../public/images/process-test1.svg";
import processArrow from "../../public/images/process-arrow.svg";
import processTest2 from "../../public/images/process-test2.svg";
import processTest3 from "../../public/images/process-test3.svg";
import processTest4 from "../../public/images/process-test4.svg";
import processTest5 from "../../public/images/process-test5.svg";
import processBottomArrow from "../../public/images/process-bottom-arrow.svg";

const EndToEnd = () => {
  return (
    <div>
      <div className="process-div">
        <div className="process-card-div visible-lg hidden-md hidden-sm hidden-xs">
          <h2>End-to-end processes</h2>
          <div className="card-container">
            <div className="process-card">
              <div className="process-img-div">
                <Image src={processTest1} className="process-img" />
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
            />

            <div className="process-card">
              <div className="process-img-div">
                <Image className="process-img" src={processTest2} />
              </div>
              <div className="process-info">
                <p>2. Installation</p>
              </div>
            </div>
            <Image className="process-arrow" src={processArrow} />

            <div className="process-card">
              <div className="process-img-div">
                <Image className="process-img" src={processTest3} />
              </div>
              <div className="process-info">
                <p>3. Energy Management</p>
              </div>
            </div>

            <Image className="process-arrow" src={processArrow} />

            <div className="process-card">
              <div className="process-img-div">
                <Image src={processTest4} className="process-img" />
              </div>
              <div className="process-info">
                <p>4. Access & Billing</p>
              </div>
            </div>

            <Image className="process-arrow" src={processArrow} />

            <div className="process-card">
              <div className="process-img-div">
                <img
                  className="process-img"
                  src="assets/plugins/nodebb-theme-electrum/images/process-test5.svg"
                />
                <Image src={processTest5} className="process-img" />
              </div>
              <div className="process-info">
                <p>5. Monitoring and Maintenance</p>
              </div>
            </div>

            <div className="process-bottom-arrow-div">
              <Image
                className="process-bottom-arrow"
                src={processBottomArrow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndToEnd;
