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
import Public from "../../../public/images/public.svg";
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

export default function Home() {
  return (
    <div>
      <div className="electrum-page">
        <BannerSlider />

        <div className="industry-card-main-content">
          <div className="industry-card-bg-image"></div>
          <div className="industry-cards">
            <h2>Industries we electrify</h2>
            <div className="d-flex justify-between">
              <div className="industry-cards-content">
                <Image src={Single} className="mb-3" width={150} height={150} />
                <h3>Single Residential</h3>
                <p>Single-family detached and semi-detached houses.</p>
                <Link href="/singlefamilyresidential">
                  Learn more &nbsp; &gt;
                </Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Multi} className="mb-3" width={150} height={150} />
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
                />
                <h3>Workplace</h3>
                <p>Corporate, government and other office buildings.</p>
                <Link href="/workplace">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Public} className="mb-3" width={150} height={150} />
                <h3>Public</h3>
                <p>Retail, parking, and other public spaces.</p>
                <Link href="/public">Learn more &nbsp; &gt;</Link>
              </div>

              <div className="industry-cards-content">
                <Image src={Fleet} className="mb-3" width={150} height={150} />
                <h3>Fleet</h3>
                <p>Transit, ride-hailing, and delivery fleets.</p>
                <Link href="/fleet">Learn more &nbsp; &gt;</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 hidden-sm hidden-xs hidden-md">
          <div className="col-lg-12">
            {/* <Image src={WhitePoly} className="poly-img poly-top" /> */}
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
        </div>
        <div className="insights-div col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 smart-energy-container">
            <h2 className="pt-10">Insights into smart energy</h2>
            <div className="col-lg-12">
              <div className="d-flex justify-between smart-inner-content">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage} width={130} />
                    <h3>Key analytics</h3>
                    <p>
                      Big data at your fingertips. Make swift business decisions
                      backed up by real statistics.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage2} width={120} />
                    <h3 className="smart-energy-content-heading">
                      Monitor & control
                    </h3>
                    <p>
                      Monitor charging statuses live. Troubleshoot and control
                      any charger in your system remotely.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image
                      src={SmartImage3}
                      className="mb-4 mt-2"
                      width={130}
                    />
                    <h3>Custom pricing</h3>
                    <p>
                      Set your own charging rates with flexible options like
                      flat fee, price per minute, and price per kWh.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-between smart-inner-content">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image
                      src={SmartImage4}
                      className="mb-5 mt-2"
                      width={130}
                    />
                    <h3>Automatic billing</h3>
                    <p>
                      Automatically receive payments on time every billing
                      cycle. No need to chase down credit cards.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage5} width={130} />
                    <h3>Dynamic power</h3>
                    <p>
                      Our smart system manages the power consumption of your
                      entire site to optimize performance and cost.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage6} width={130} />
                    <h3>Easy QR activation</h3>
                    <p>
                      Allow customers the option to quickly charge as guest or
                      create an account for future convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 testimonials-div">
          <div className="advantage-div advantage-content col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 container p-50">
            <h2>The Electrum advantage</h2>
            <div className="d-flex justify-between">
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage1} className="d-inline" />
                </div>
                <h3 className="mt-4 mb-4">Technical Experts</h3>
                <p>
                  Our certified team of EV experts have extensive experience in
                  meeting the unique needs of each customer.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage2} className="d-inline" />
                </div>
                <h3 className="mt-4 mb-2">Cost Recovery & ROI</h3>
                <p>
                  We offer numerous cost recovery options through billing,
                  energy management, carbon offsets, and grid curtailment.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage3} className="d-inline" />
                </div>
                <h3 className="mt-4 mb-4">Support driven</h3>
                <p>
                  At Electrum, we strive for service excellence and customer
                  satisfaction, with every client, every time.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
                <div>
                  <Image src={Advantage4} className="d-inline" />
                </div>
                <h3 className="mt-4 mb-2">Proven track record</h3>
                <p>
                  We have built EV infrastructure for some of the largest sites
                  and brands in the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AutoPlay />

        <div class="bottom-cta">
          <div class="bottom-overlay"></div>
          <div class="bottom-cta-text">
            <h2>Invest in your EV future today.</h2>
            <Link href="/contact" class="home-cta-btn">
              {" "}
              Get started{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
