import React from "react";
import { FaAngleDown } from "react-icons/fa";

function NavItems(props) {
  return (
    <div >
      <li className="d-inline-block ml-8">
        <a href="/" className="hover:text-cyan-500">
          Home
        </a>
      </li>
      <button onMouseOver={props.onMouseOver} className="hover:text-cyan-500  ml-8">
        Solutions
        <FaAngleDown className="d-inline-block arrow" />
      </button>
      

      <button onMouseOver={props.onMouseOver} className="hover:text-cyan-500 d-inline-block ml-8">
          Charging Stations
      </button>

      <li className="d-inline-block ml-8">
        <a href="/support" className="hover:text-cyan-500">
          Support
        </a>
      </li>

      <li className="d-inline-block ml-8">
        <a href="/contact" className="hover:text-cyan-500">
          Contact
        </a>
      </li>

      <li className="d-inline-block ml-8">
        <a href="/about" className="hover:text-cyan-500">
          About
        </a>
      </li>
    </div>
  );
}

export default NavItems;
