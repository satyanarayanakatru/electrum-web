import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "./dropdown";

export default function navItems(props) {
  const [isShow, setIsShow] = useState(false);
  const show = () => {
    setIsShow(true);
  };

  const hide = () => {
    setIsShow(false);
  };

  return (
    <div>
      <div className="nav-bar-list">
        <ul>
          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <a href="/" className="hover:text-cyan-500">
              Home
            </a>
          </li>

          <button
            onMouseEnter={show}
            className="hover:text-cyan-500  ml-8 sol-btn"
          >
            Solutions
            <Dropdown isVisible={isShow} />
          </button>

          <li
            onMouseEnter={hide}
            className="d-inline-block ml-8 hover:text-cyan-500"
          >
            <a href="/chargingstations">Charging Stations</a>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <a href="/support" className="hover:text-cyan-500">
              Support
            </a>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <a href="/contact" className="hover:text-cyan-500">
              Contact
            </a>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <a href="/about" className="hover:text-cyan-500">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
