import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "./dropdown";
import Link from "next/link";

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
            <Link href="/" className="hover:text-cyan-500">
              Home
            </Link>
          </li>

          <button
            onMouseEnter={show} 
            className="hover:text-cyan-500  ml-8 sol-btn"
          >
            Services
            <Dropdown isVisible={isShow} />
          </button>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/casestudies" className="hover:text-cyan-500">Case Studies</Link>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/support" className="hover:text-cyan-500">
              Support
            </Link>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/contact" className="hover:text-cyan-500">
              Contact
            </Link>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/about" className="hover:text-cyan-500">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
