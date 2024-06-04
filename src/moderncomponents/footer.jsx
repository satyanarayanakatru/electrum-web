import React from "react";
import Logo from "../../public/Electrum_White.png";
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
          <div className="footer-logo-content">
            <div className="logo">
              <div>
                <a href="">
                  {/* <Image src={Logo} width={38} height={100} className="e-logo"/> */}
                </a>
              </div>

              <div>
                <Link href="/">
                  <Image
                    src={Logo}
                    width={100}
                    className="logo2 footerlogo"
                    alt="footer-logo"
                  />
                </Link>
              </div>
            </div>
            <h2 className="footer-heading">
              EV Charging and Energy Management
            </h2>
          </div>
          <div className="footer-signup">
            <p>
              Sign up for our newsletter to read our unique perspective on the
              EV industry.
            </p>
            <label>
               Email Address <span>*</span>
            </label> <br />
            <input type="email" id="email"/> <br />
            <input type="checkbox" name="" id="checkbox" />{" "}
            <span>
              I agree to the <a href="">privacy policy</a>
            </span>&nbsp;
            <span className="asterisk">*</span>
            <button type="submit">Submit</button>
          </div>
          <div className="footer-address">
            <p>Electrum Charging Solutions Inc,</p>
            {/* <p>Global: +972-73-2239850</p> */}
            <p>Address: <span>104-17741 65A Ave, Surrey, BC V3S 1Z8</span>  </p>
            <p>Canada: <span>+1 866 898 3873</span> </p>
            <p>
              Email: <Link href="/contact"><span>support@electrumcharging.com</span></Link>
            </p>
            <div className="social-icons">
              <Link href="https://x.com/electrumchrge?s=11">
                <FaTwitter className="d-inline-block m-4 social-icons-icon" />
              </Link>
              <Link href="https://www.linkedin.com/company/electrum-charging-solutions/">
                <FaLinkedinIn className="d-inline-block social-icons-icon" />
              </Link>
            </div>
            <button>We are hiring</button>
          </div>
        </div>
        <div className="copy-rights">
          <p>
            <a href="">Privacy Policy</a>{" "}
            <a href="">Website Terms & Conditions</a> | Copyright © 2024
            Electrum Charging Solutions Inc, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
