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
import SmartImage6 from "../../../public/images/SE-6.png";
import BluePolyReverse from "../../../public/images/blue-poly-reverse.png";
import Advantage1 from "../../../public/images/electrum-advantage-1.svg";
import Advantage2 from "../../../public/images/electrum-advantage-2.svg";
import Advantage3 from "../../../public/images/electrum-advantage-3.svg";
import Advantage4 from "../../../public/images/electrum-advantage-4.svg";
import AutoPlay from "../../components/slider";
import BannerSlider from "./BannerSlider";
import Planning from '../../../public/images/planning1.jpg';

export default function Home() {
  return (
    <div>
      <div className="electrum-page">
        <BannerSlider />

        <div className="industry-card-main-content">
          <div className="industry-card-bg-image"></div>
          <div className="industry-cards">
            <h2>Industries we electrify</h2>
            <div className="industry-card-inner-content d-flex justify-between">
              <div className="industry-cards-content">
                <Image src={Single} className="mb-3" width={150} height={150} alt="single-image"/>
                <h3>Single Residential</h3>
                <p>Single-family detached and semi-detached houses.</p>
                <Link href="/singlefamilyresidential">
                  Learn more &nbsp; &gt;
                </Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Multi} className="mb-3" width={150} height={150} alt="multi-image"/>
                <h3>Multi-Unit Residential</h3>
                <p>Apartments, condos and other MURBs.</p>
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
                <p>Corporate, government and other office buildings.</p>
                <Link href="/workplace">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Public} className="mb-3" width={150} height={150} alt="public-image"/>
                <h3>Public</h3>
                <p>Retail, parking, and other public spaces.</p>
                <Link href="/public">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Fleet} className="mb-3" width={150} height={150} alt="fleet-image"/>
                <h3>Fleet</h3>
                <p>Transit, ride-hailing, and delivery fleets.</p>
                <Link href="/fleet">Learn more &nbsp; &gt;</Link>
              </div>
            </div>
          </div>
        </div>
        <AutoPlay />

        {/* <div className="col-lg-12 hidden-sm hidden-xs hidden-md">
          <div className="col-lg-12">
            <Image src={Planning} className="" />
            <div className="planning-info-content">
              <div className="planning-info-inner-content">
                <div className="planning-info">
                  <h2>We're with you, every step of the way</h2>
                  <h5>Planning & Design</h5>
                  <p>
                    The first phase of your journey with us begins with the
                    electrical planning and design. We’ll work with you to
                    design the infrastructure required for the EV charging
                    stations. Then we’ll provide you with a detailed feasibility
                    plan including marked-up drawings, procurement, timelines,
                    and budget. Now the plan is set in motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}



    <section className="insights">
        <h2>Insights into smart energy</h2>
        <div className="features">
            <div className="feature">
            <Image src={SmartImage} width={130} alt="smartimage"/>
                <h3>KEY ANALYTICS</h3>
                <p>Big data at your fingertips. Make swift business decisions backed up by real statistics.</p>
            </div>
            <div className="feature">
            <Image src={SmartImage2} width={130} alt="smartimage"/>
                <h3>MONITOR & CONTROL</h3>
                <p>Monitor charging statuses live. Troubleshoot and control any charger in your system remotely.</p>
            </div>
            <div className="feature">
            <Image src={SmartImage3} width={130} alt="smartimage"/>
                <h3>CUSTOM PRICING</h3>
                <p>Set your own charging rates with flexible options like flat fee, price per minute, and price per kWh.</p>
            </div>
            <div className="feature">
            <Image src={SmartImage4} width={130} alt="smartimage"/>
                <h3>AUTOMATIC BILLING</h3>
                <p>Automatically receive payments on time every billing cycle. No need to chase down credit cards.</p>
            </div>
            <div className="feature">
            <Image src={SmartImage5} width={130} alt="smartimage"/>
                <h3>DYNAMIC POWER</h3>
                <p>Our smart system manages the power consumption of your entire site to optimize performance and cost.</p>
            </div>
            <div className="feature">
            <Image src={SmartImage6} width={130} alt="smartimage"/>
                <h3>EASY QR ACTIVATION</h3>
                <p>Allow customers the option to quickly charge as guest or create an account for future convenience.</p>
            </div>
        </div>
    </section>
        <div className="col-lg-12 testimonials-div">
          <div className="advantage-div advantage-content col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 container p-50">
            <h2>The Electrum advantage</h2>
            <div className="electrum-advantage-content d-flex justify-between">
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage1} className="d-inline" alt="advantage-image"/>
                </div>
                <h3 className="mt-4 mb-3">Technical Experts</h3>
                <p>
                  Our certified team of EV experts have extensive experience in
                  meeting the unique needs of each customer.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage2} className="d-inline" alt="advantage-image"/>
                </div>
                <h3 className="mt-4 mb-3">Cost Recovery & ROI</h3>
                <p>
                  We offer numerous cost recovery options through billing,
                  energy management, carbon offsets, and grid curtailment.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage3} className="d-inline" alt="advantage-image"/>
                </div>
                <h3 className="mt-4 mb-3">Support driven</h3>
                <p>
                  At Electrum, we strive for service excellence and customer
                  satisfaction, with every client, every time.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage4} className="d-inline" alt="advantage-image"/>
                </div>
                <h3 className="mt-4 mb-3">Proven track record</h3>
                <p>
                  We have built EV infrastructure for some of the largest sites
                  and brands in the world.
                </p>
              </div>
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
