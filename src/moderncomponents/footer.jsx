import React from "react";
import Logo from "../../public/images/logo.png";
import Logo2 from "../../public/images/electrum-logo3.jpg";
import Image from "next/image";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-inner-content">
          <div>
          <div className="logo">
            <div>
              <a href="">
                <Image src={Logo} width={38} height={100} />
              </a>
            </div>

            <div>
              <a href="">
                <Image src={Logo2} width={100} className="logo2" />
              </a>
            </div>
          </div>
            <h2>EV Charging and Energy Management</h2>
          </div>
          <div className="footer-signup">
            <p>
              Sign up for our newsletter to read our unique perspective on the
              EV industry.
            </p>
            <label>
              Corporate Email <span>*</span>
            </label> <br />
            <input type="email" id="email"/> <br />
            <input type="checkbox" name="" id="checkbox" />{" "}
            <span>
              I agree to the <a href="">privacy policy</a>
            </span>&nbsp;
            <span className="asterisk">*</span>
            <button type="submit">submit</button>
          </div>
          <div className="footer-address">
            <p>Electrum Charging Solutions Pvt Ltd.</p>
            <p>Global: +972-73-2239850</p>
            <p>Europe: +44-800-418-780</p>
            <p>US Toll Free: +1-888-5202404</p>
            <p>
              Email: <a href="">contactus@electrum charging solutions</a>
            </p>
            <div className="social-icons">
              <a href=""><FaTwitter className="d-inline-block m-4 social-icons-icon"/></a>
              <a href=""><FaLinkedinIn className="d-inline-block social-icons-icon"/></a>
            </div>
            <button>We are hiring</button>
          </div>
        </div>
        <div className="copy-rights">
          <p>
            <a href="">Privacy Policy</a>{" "}
            <a href="">Website Terms & Conditions</a> | Copyright © 2024 Electrum Charging Solutions
            Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
