import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "./dropdown";
import Link from "next/link";

export default function NavItems(props) {
  const [isShow, setIsShow] = useState(props.isShow);
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
            <Link href="/" className="list-item">
              Home
            </Link>
          </li>

          <button
            onMouseEnter={show} 
            className="list-item  ml-8 sol-btn"
          >
            Solutions
            <Dropdown isVisible={isShow} />
          </button>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/blog" className="list-item">Blog</Link>
          </li>

          <li onMouseEnter={hide} className="d-inline-block ml-8">
            <Link href="/about" className="list-item">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
