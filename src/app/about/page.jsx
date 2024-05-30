import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./About.css";
import About1 from "../../../public/images/about1.png";
import About2 from "../../../public/images/about2.png";
import Quote from "../../../public/images/quote.png";
import AboutIcon1 from "../../../public/images/about-icon1.svg";
import AboutIcon2 from "../../../public/images/about-icon2.svg";
import AboutIcon3 from "../../../public/images/about-icon3.svg";
import AboutIcon4 from "../../../public/images/about-icon4.svg";
import Advantage1 from "../../../public/images/electrum-advantage-1.svg";
import Advantage2 from "../../../public/images/electrum-advantage-2.svg";
import Advantage3 from "../../../public/images/electrum-advantage-3.svg";
import Advantage4 from "../../../public/images/electrum-advantage-4.svg";
import ElectrumBanner from "../../../public/images/ElectrumImage.png";

export default function About() {
  return (
    <div>
      <div className="electrum-about">
        {/* <div className="electrum-banner page-banner">
          <div className="banner-overlay">
            <Image src={ElectrumBanner}/>
          </div>
        </div>
        <div className="about-banner-text">
          <div className="banner-title">
            <h1>About us</h1>
          </div>
          <div className="banner-text">
            <p>
              Electrum provides end-to-end electric mobility solutions tailored
              to your needs, from planning, installation, to software.
            </p>
          </div>
        </div> */}

        <div className="quotes-info">
          <h1 className="mission-heading">Mission Statement</h1>

          <div className="info-div">
            <Image src={Quote} alt="quote-image"/>
            <div className="info">
              <p>
                We empower our customers by providing solutions that allow for
                the adoption of electrified platforms. We advance climate
                solutions and new technologies for the intelligent management of
                electricity from ‘Generation-To-User’.
              </p>
            </div>
          </div>
        </div>
        <div className="our-story">
          <div className="our-story-container">
            <div className="story-info">
              <h2>Our story</h2>
              <p>
                Incorporated in May of 2015, Electrum set out to position itself
                as an electric mobility solutions company.
              </p>
              <p>
                Over the years, Electrum has established many strong
                partnerships such as Tesla, Porsche, Siemens, Nemetz, ABB and
                Phi-Hong. By 2020, Electrum has crossed the milestone of
                completing over 5,000 installations, earning trusted clients
                such as the Fraser Valley Hospital Network (Richmond Hospital,
                St. Paul’s Hospital, Vancouver General Hospital, etc). The
                achievements have paved the way to civic installations for the
                city of Surrey, Vancouver, North Vancouver, and Burnaby.
              </p>
            </div>
            <div className="story-imgs">
              <Image src={About1} className="story-inner-img" alt="about-image"/>
              <Image src={About2} className="story-inner-img" alt="about-image"/>
            </div>
          </div>
        </div>

        {/* <div className="about-icons">
          <div className="icons-title">
            <h2>The Electrum Advantage</h2>
          </div>
          <div className="icons">
            <div className="icon-div">
              <div>
                <Image src={AboutIcon1} />
              </div>
              <div>
                <h3>Technical experts</h3>
                <p>
                  Our certified team of EV experts have extensive experience in
                  meeting the unique needs of each customer.
                </p>
              </div>
            </div>
            <div className="icon-div">
              <div>
                <Image src={AboutIcon2} />
              </div>
              <div>
                <h3>Cost Recovery & ROI</h3>
                <p>
                  We offer numerous cost recovery options through billing,
                  energy management, carbon offsets, and grid curtailment.
                </p>
              </div>
            </div>
            <div className="icon-div">
              <div>
                <Image src={AboutIcon3} />
              </div>
              <div>
                <h3>Support driven</h3>
                <p>
                  At Electrum, we strive for service excellence and customer
                  satisfaction, with every client, every time.
                </p>
              </div>
            </div>
            <div className="icon-div">
              <div>
                <Image src={AboutIcon4} />
              </div>
              <div>
                <h3>Proven track record</h3>
                <p>
                  With 5000+ installations, we have built EV infrastructure for
                  some of the largest sites and brands in the world.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="leadership-section">
          <h2>LeaderShip</h2>
          <div className="leadership-main-content">
            <div className="leadership-inner-content">
              <h4>Dan Trudel</h4>
              <p>yet to update *</p>
            </div>
            <div className="leadership-inner-content">
              <h4>Chris Lee</h4>
              <p>yet to update *</p>
            </div>
          </div>
        </div>

      
  

        <div className="bottom-cta">
          <div className="bottom-overlay"></div>
          <div className="bottom-cta-text">
            <h2>Embrace our EV future.</h2>
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
