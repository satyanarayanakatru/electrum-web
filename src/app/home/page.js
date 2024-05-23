import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiTildeBold } from "react-icons/pi";
import './page.css'
import HomeSlider from "../../../public/images/home-slider2.png";
import WhitePoly from "../../../public/images/white-poly.png";
import BluePoly from "../../../public/images/blue-poly.png";
import CardImage from "../../../public/images/card-image1.png";
import CardImage2 from "../../../public/images/card-image2.png";
import CardImage3 from "../../../public/images/card-image3.png";
import CardImage4 from "../../../public/images/card-image4.png";
import CardImage5 from "../../../public/images/card-image5.png";
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
import  Logo1 from  "../../../public/images/logo1.png";
import  Logo2 from  "../../../public/images/logo2.png";
import  Logo3 from  "../../../public/images/logo3.png";
import  Logo4 from  "../../../public/images/logo4.png";
import  Logo5 from  "../../../public/images/logo5.png";
import  Logo6 from  "../../../public/images/logo6.png";

 

export default function Home() {
  return (
    <div>
      <div className="electrum-page">
        <div className="electrum-banner electrum-home">
          <div className="home-overlay top-overlay"></div>
          <div className="home-banner-text">
            <div className="text-center">
              <h1>Driving the global e-mobility revolution</h1>
              <p>
                We provide end-to-end solutions for EV charging infrastructure
                and energy management.
              </p>
              <Link href="/contact" className="home-cta-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="electrum-industry-cards">
          <div className="card-container">
            <div className="inner-card-container card-inner-content d-flex align-items-center">
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card title-card">
                <div className="inner-card">
                  <h2>
                    Industries we electrify <br />
                    <PiTildeBold />
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card">
                <div className="inner-card">
                  <div className="card-info">
                    <div className="image-div">
                      <Image
                        src={CardImage}
                        className="m-0"
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3 className="pt-6">Residential</h3>
                    <p>Single-family detached and semi-detached houses.</p>
                  </div>
                  <div className="card-link ">
                    <Link href="/single-residential">
                      Learn more &nbsp; &gt;
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card">
                <div className="inner-card">
                  <div className="card-info">
                    <div className="image-div">
                      <Image
                        src={CardImage2}
                        className="m-1"
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3>Multi-Unit Residential</h3>
                    <p>Apartments, condos and other MURBs.</p>
                  </div>
                  <div className="card-link">
                    <Link href="/multi-residential">
                      Learn more &nbsp; &gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-card-container card-inner-content d-flex">
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card">
                <div className="inner-card">
                  <div className="card-info">
                    <div className="image-div">
                      <Image
                        src={CardImage3}
                        className="mb-3"
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3>Workplace</h3>
                    <p>Corporate, government and other office buildings.</p>
                  </div>
                  <div className="card-link">
                    <Link href="/workplace">Learn more &nbsp; &gt;</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card">
                <div className="inner-card">
                  <div className="card-info">
                    <div className="image-div">
                      <Image
                        src={CardImage5}
                        className="mb-4"
                        width={160}
                        height={150}
                      />
                    </div>
                    <h3>Public</h3>
                    <p>Retail, parking, and other public spaces.</p>
                  </div>
                  <div className="card-link">
                    <Link href="/public">Learn more &nbsp; &gt;</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6 col-xs-12 industry-card">
                <div className="inner-card">
                  <div className="card-info">
                    <div className="image-div">
                      <Image
                        src={CardImage4}
                        className="mb-5"
                        width={150}
                        height={150}
                      />
                    </div>
                    <h3>Fleet</h3>
                    <p>Transit, ride-hailing, and delivery fleets.</p>
                  </div>
                  <div className="card-link">
                    <Link href="/fleet">Learn more &nbsp; &gt;</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 hidden-sm hidden-xs hidden-md">
          <div className="col-lg-12">
            <Image src={WhitePoly} className="poly-img poly-top" />
            <div className="col-lg-12 d-flex align-items-center">
              <div className="process-info process-info-container text-center">
                <div className="col-lg-6 col-lg-offset-4 ">
                  <h2 className="process-info-heading display-5 font-weight-bold">We're with you, every step of the way</h2>
                </div>
                <div className="step-info col-lg-6 col-lg-offset-4">
                  <h5 className="font-weight-light">Planning & Design</h5>
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
              <div className="process-image">
                <Image className="slider-image" src={HomeSlider} />
              </div>
            </div>
            <Image className="poly-img poly-bottom" src={BluePoly} />
          </div>
        </div>
        <div className="insights-div col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 smart-energy-container">
            <h2 className="pt-10">Insights into smart energy</h2>
            <div className="col-lg-12">
              <div className="d-flex justify-between smart-inner-content">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage} width={130}/>
                    <h3>Key analytics</h3>
                    <p>
                      Big data at your fingertips. Make swift business decisions
                      backed up by real statistics.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage2} width={120}/>
                    <h3 className="smart-energy-content-heading">Monitor & control</h3>
                    <p>
                      Monitor charging statuses live. Troubleshoot and control
                      any charger in your system remotely.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage3} className="mb-4 mt-2" width={130}/>
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
                    <Image src={SmartImage4} className="mb-5 mt-2" width={130}/>
                    <h3>Automatic billing</h3>
                    <p>
                      Automatically receive payments on time every billing
                      cycle. No need to chase down credit cards.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage5} width={130}/>
                    <h3>Dynamic power</h3>
                    <p>
                      Our smart system manages the power consumption of your
                      entire site to optimize performance and cost.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 insight-feature">
                  <div className="smart-energy-content">
                    <Image src={SmartImage6} width={130}/>
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
          <Image
            className="poly-img poly-top hidden-md visible-lg hidden-sm hidden-xs"
            src={BluePolyReverse}
          />
          <div className="advantage-div advantage-content col-lg-6 col-lg-offset-3 col-md-12 col-sm-12 col-xs-12 container p-50">
            <h2>The Electrum advantage</h2>
            <div className="d-flex justify-between">
            <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
              <div>
                <Image src={Advantage1} className="d-inline"/>
              </div>
              <h3 className="mt-4 mb-4">Technical Experts</h3>
              <p>
                Our certified team of EV experts have extensive experience in
                meeting the unique needs of each customer.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
              <div>
              <Image src={Advantage2} className="d-inline"/>
              </div>
              <h3 className="mt-4 mb-2">Cost Recovery & ROI</h3>
              <p>
                We offer numerous cost recovery options through billing, energy
                management, carbon offsets, and grid curtailment.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
              <div>
              <Image src={Advantage3} className="d-inline"/>
              </div>
              <h3 className="mt-4 mb-4">Support driven</h3>
              <p>
                At Electrum, we strive for service excellence and customer
                satisfaction, with every client, every time.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 advantage-info">
              <div>
              <Image src={Advantage4} className="d-inline"/>
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
          <div className="testimonial-logos col-xs-12">
            <Image className="testimonial-logo" src={Logo1}/>
            <Image className="testimonial-logo" src={Logo2}/>
            <Image className="testimonial-logo" src={Logo3}/>
            <Image className="testimonial-logo" src={Logo4}/>
            <Image className="testimonial-logo" src={Logo5}/>
            <Image className="testimonial-logo" src={Logo6}/>
          </div>
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
