"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavItems from "./navItems";
import Dropdown from "./dropdown";
import './navbar.css';
import Logo from '../../public/images/logo.svg'

const Navbar = () => {
  function myFunction(x,y) {
    var x = document.getElementById("nav_bar");
    var y = document.getElementById("hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";   
    }
    y.classList.toggle("change");
}

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <header className="fix fixed">
        <div className="logo">
          <Image
            src={Logo}
            alt="logo_image"
            className="mr-7"
            width={200}
            height={50}
          />
        </div>
        <div className="ham_menu" id="hamburger" onClick={myFunction}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div id="nav_bar">
          <div className="navbar">
            <nav>
              <NavItems onMouseOver={toggleVisibility} />
              <Dropdown isVisible={isVisible} />
            </nav>
          </div>
          <div>
            <button className="get_started_btn">Get started</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
