import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer_content">
        <div className="footer_inner_content">
          <h6>COMPANY</h6>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
        </div>
        <div className="footer_inner_content">
          <h6>RESOURCES</h6>
          <li>
            <a href="">FAQ</a>
          </li>
        </div>
        <div className="footer_inner_content">
          <h6>ELECTRUM</h6>
          <div className="social_icons">
            <FaFacebookSquare size={25} className="ml-8 icons" />
            <FaTwitterSquare size={25} className="ml-8 icons" />
            <FaInstagramSquare size={25} className="ml-8 icons" />
            <FaYoutubeSquare size={25} className="ml-8 icons" />
          </div>
          <p>
            © 2024 Electrum Charging <br />
            Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
