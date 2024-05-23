import React from "react";
import { FaAngleDown } from "react-icons/fa";

function NavItems(props) {
  return (
    <div className="button_content">
      <li className="d-inline-block ml-8">
        <a href="/" className="hover:text-cyan-500">
          Home
        </a>
      </li>
      <button onClick={props.onClick} className="hover:text-cyan-500 mb-4 ml-8">
        Solutions
        <FaAngleDown className="d-inline-block arrow" />
      </button>

      <li className="d-inline-block ml-12">
        <a href="/about" className="hover:text-cyan-500">
          Charging Stations
        </a>
      </li>

      <li className="d-inline-block ml-12">
        <a href="/support" className="hover:text-cyan-500">
          Support
        </a>
      </li>

      <li className="d-inline-block ml-12">
        <a href="/contact" className="hover:text-cyan-500">
          Contact
        </a>
      </li>

      <li className="d-inline-block ml-12">
        <a href="/about" className="hover:text-cyan-500">
          About
        </a>
      </li>
    </div>
  );
}

export default NavItems;
