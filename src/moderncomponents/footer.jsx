import React from "react";
import Logo2 from "../../public/images/electrum-logo3.png";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-inner-content">
          <div>
          <div className="logo">
            <div>
              <a href="">
                {/* <Image src={Logo} width={38} height={100} className="e-logo"/> */}
              </a>
            </div>

            <div>
              <a href="">
                <Image src={Logo2} width={100} className="logo2 footerlogo" alt="footer-logo" />
              </a>
            </div>
          </div>
            <h2 className="footer-heading">EV Charging and Energy Management</h2>
          </div>
          <div className="footer-signup">
            <p>
              Sign up for our newsletter to read our unique perspective on the
              EV industry.
            </p>
            {/* <label>
              Corporate Email <span>*</span>
            </label> <br />
            <input type="email" id="email"/> <br />
            <input type="checkbox" name="" id="checkbox" />{" "}
            <span>
              I agree to the <a href="">privacy policy</a>
            </span>&nbsp;
            <span className="asterisk">*</span> */}
            <Link href="/contact" type="submit" className="footer-contact-btn">Contact Us</Link>
          </div>
          <div className="footer-address">
            <p>Electrum Charging Solutions Inc,</p>
            {/* <p>Global: +972-73-2239850</p> */}
            <p>Address: 104-17741 65A Ave, Surrey, BC V3S 1Z8 </p>
            <p>Canada: +1 866 898 3873</p>
            <p>
              Email: <a href="">support@electrumcharging.com</a>
            </p>
            <div className="social-icons">
              <Link href="https://x.com/electrumchrge?s=11"><FaTwitter className="d-inline-block m-4 social-icons-icon"/></Link>
              <Link href="https://www.linkedin.com/company/electrum-charging-solutions/"><FaLinkedinIn className="d-inline-block social-icons-icon"/></Link>
            </div>
            <button>We are hiring</button>
          </div>
        </div>
        <div className="copy-rights">
          <p>
            <a href="">Privacy Policy</a>{" "}
            <a href="">Website Terms & Conditions</a> | Copyright © 2024 Electrum Charging Solutions
            Inc, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

