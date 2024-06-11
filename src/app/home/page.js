import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiTildeBold } from "react-icons/pi";
import "./page.css";
import HomeSlider from "../../../public/images/home-slider2.png";
import WhitePoly from "../../../public/images/white-poly.png";
import BluePoly from "../../../public/images/blue-poly.png";
import Single from "../../../public/images/single.svg";
import Multi from "../../../public/images/multi.svg";
import Workplace from "../../../public/images/workplace.svg";
import Fleet from "../../../public/images/fleet.svg";
import Public from "../../../public/images/public.png";
import SmartImage from "../../../public/images/SE-1.png";
import SmartImage2 from "../../../public/images/SE-2.png";
import SmartImage3 from "../../../public/images/SE-3.png";
import SmartImage4 from "../../../public/images/SE-4.png";
import SmartImage5 from "../../../public/images/SE-5.png";
import Rebates from "../../../public/rebates.jpg";
import SmartImage6 from "../../../public/images/SE-6.png";
import QRCode from "../../../public/QR_Code_Activation.png";
import BluePolyReverse from "../../../public/images/blue-poly-reverse.png";
import Advantage1 from "../../../public/images/electrum-advantage-1.svg";
import Advantage2 from "../../../public/images/electrum-advantage-2.svg";
import Advantage3 from "../../../public/images/electrum-advantage-3.svg";
import Advantage4 from "../../../public/images/electrum-advantage-4.svg";
import BannerSlider from "./BannerSlider";
import Planning from "../../../public/images/planning1.jpg";
import BrandSliders from "../../components/brandsliders";

export default function Home() {
  return (
    <div>
      <div className="electrum-page">
        <BannerSlider />

        <div className="industry-card-main-content">
          <div className="industry-card-bg-image"></div>
          <div className="industry-cards">
            <h2>Industries We Electrify</h2>
            <div className="industry-card-inner-content d-flex justify-center">
              <div className="industry-cards-content">
                <Image
                  src={Multi}
                  className="mb-3"
                  width={150}
                  height={150}
                  alt="multi-image"
                />
                <h3>MURBs</h3>
                <p>Robust solutions for apartments and condos.</p>
                <Link href="/multiunitresidential">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image
                  src={Workplace}
                  className="mb-3"
                  width={150}
                  height={150}
                  alt="workplace-image"
                />
                <h3>Workplace</h3>
                <p>Powering corporate and government buildings.</p>
                <Link href="/workplace">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image
                  src={Public}
                  className="mb-3"
                  width={150}
                  height={150}
                  alt="public-image"
                />
                <h3>Public</h3>
                <p>Convenient charging for retail and public spaces.</p>
                <Link href="/public">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image
                  src={Fleet}
                  className="mb-3"
                  width={150}
                  height={150}
                  alt="fleet-image"
                />
                <h3>Fleet</h3>
                <p>Optimized charging for transit and delivery fleets.</p>
                <Link href="/fleet">Learn more &nbsp; &gt;</Link>
              </div>
            </div>
          </div>
        </div>
        <BrandSliders />

        <section className="insights">
          <h2>Platform Features</h2>
          <div className="features">
            <div className="feature">
              <Image src={SmartImage} width={130} alt="smartimage" />
              <h3>KEY ANALYTICS</h3>
              <p>Make informed decisions with real-time data.</p>
            </div>
            <div className="feature">
              <Image src={SmartImage2} width={130} alt="smartimage" />
              <h3>MONITOR & CONTROL</h3>
              <p>Live monitoring and remote troubleshooting.</p>
            </div>
            <div className="feature">
              <Image src={SmartImage3} width={130} alt="smartimage" />
              <h3>CUSTOM PRICING</h3>
              <p>Flexible pricing options to suit your needs.</p>
            </div>
            <div className="feature">
              <Image src={SmartImage4} width={130} alt="smartimage" />
              <h3>AUTOMATED BILLING</h3>
              <p>Automatic payouts to site hosts every billing cycle.</p>
            </div>
            <div className="feature">
              <Image src={SmartImage5} width={130} alt="smartimage" />
              <h3>DYNAMIC POWER</h3>
              <p>Optimize site power consumption for cost savings.</p>
            </div>
            {/* <div className="feature">
              <Image src={QRCode} width={130} alt="smartimage" />
              <h3>EASY QR ACTIVATION</h3>
              <p>Quick and convenient charging for guests and members.</p>
            </div> */}
          </div>
        </section>
        <div className="col-lg-12 testimonials-div">
          <div className="advantage-div advantage-content col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 container p-50">
            <h2>The Electrum Advantage</h2>
            <div className="electrum-advantage-content d-flex justify-between">
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image
                    src={Advantage1}
                    className="d-inline"
                    alt="advantage-image"
                  />
                </div>
                <h3 className="mt-4 mb-3">Technical Experts</h3>
                <p>
                  Certified design, project management, and electrical
                  technicians.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image
                    src={Advantage2}
                    className="d-inline"
                    alt="advantage-image"
                  />
                </div>
                <h3 className="mt-4 mb-3">MAXIMIZE SAVINGS & ROI</h3>
                <p>
                  No activation or annual subscription fees. Lower operating
                  costs.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image
                    src={Advantage3}
                    className="d-inline"
                    alt="advantage-image"
                  />
                </div>
                <h3 className="mt-4 mb-3">CUSTOMER CENTRIC</h3>
                <p>Exceptional service and customer satisfaction.</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image
                    src={Advantage4}
                    className="d-inline"
                    alt="advantage-image"
                  />
                </div>
                <h3 className="mt-4 mb-3">TURNKEY SOLUTIONS</h3>
                <p>Design, deploy, manage, and operate.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rebates-main-section">
          <h2>Rebates and Incentive Programs</h2>
          <div className="rebates-section">
            <div className="rebates-image">
              <Image src={Rebates} />
            </div>
            <div>
              <p>
                Electrum manages the rebate application process, carbon credit
                aggregation and monetization, helping maximize your return on
                investment.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-cta">
          <div className="bottom-overlay"></div>
          <div className="bottom-cta-text">
            <h2>Invest in your EV future today</h2>
            <Link href="/contact" className="home-cta-btn">
              {" "}
              Contact Us{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
