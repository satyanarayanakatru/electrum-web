import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "./dropdown";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function navItems(props) {
  // const [isShow, setIsShow] = useState(false);
  // const show = () => {
  //   setIsShow(true);
  // };

  // const hide = () => {
  //   setIsShow(false);
  // };

  return (
    <div>
      <div className="nav-bar-list">
        <ul>
          <li  className="d-inline-block ml-8">
            <Link href="/" className="list-item">
              Home
            </Link>
          </li>

          <li className="ml-8 list-item">
          <DropdownMenu/>
          </li>
            
            {/* <Dropdown isVisible={isShow} /> */}

          <li  className="d-inline-block ml-8">
            <Link href="/blog" className="list-item">Blog</Link>
          </li>

          <li  className="d-inline-block ml-8">
            <Link href="/about" className="list-item">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
