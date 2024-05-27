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

export default function About() {
  return (
    <div>
      <div className="electrum-about">
        <div className="electrum-banner page-banner">
          <div className="banner-overlay"></div>
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
              <Image src={About1} className="story-inner-img" />
              <Image src={About2} className="story-inner-img" />
            </div>
          </div>
        </div>
        <div className="quotes-info">
          <div className="info-div">
            <Image src={Quote} />
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
        <div className="about-icons">
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
        </div>
        <div className="about-bottom-banner">
          <div className="about-bg"></div>
          <div className="bottom-banner-text">
            <h3>Our green future, now</h3>
            <p>
              In British Columbia, our electricity is hydro-powered and 98%
              clean. That’s an incredible advantage for our EV future. With
              federal and provincial incentives and rebates, there is no better
              time to invest in EV infrastructure today. Here at Electrum, we
              take great pride in assisting you on your journey to become 100%
              EV ready.
            </p>
            <div className="about-bottom-links">
              <Link href="">
                BC’s EV charger rebate program
                <span className="ml-8">&gt;</span>
              </Link>
              <Link href="">
                Canada’s ZEV infrastructure program{" "}
                <span className="ml-8">&gt;</span>
              </Link>
              <Link href="">
                Incentives - Plug In BC <span className="ml-8">&gt;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bottom-cta">
          <div className="bottom-overlay"></div>
          <div className="bottom-cta-text">
            <h2>Embrace our EV future.</h2>
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
