import React, { useState } from "react";
import Dropdown from "./dropdown";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import "./navbar.css";

export default function navItems(props) {
  // const [isShow, setIsShow] = useState(false);
  // const show = () => {
  //   setIsShow(true);
  // };

  // const hide = () => {
  //   setIsShow(false);
  // };

  return (
    <div className="nav-bar-list">
      <ul>
        <li className="d-inline-block ml-8">
          <Link href="/" className="list-item">
            Home
          </Link>
        </li>

        <li className="ml-8 list-item">
          <DropdownMenu />
        </li>

        {/* <Dropdown isVisible={isShow} /> */}

        <li className="d-inline-block ml-8">
          <Link href="/blog" className="list-item">
            Blog
          </Link>
        </li>

        <li className="d-inline-block ml-8">
          <Link href="/about" className="list-item">
            About Us
          </Link>
        </li>
        <li className="d-inline-block ml-8 talk">
          <Link href="/contact" className="list-item ">
            Talk to us
          </Link>
        </li>
      </ul>
    </div>
  );
}
