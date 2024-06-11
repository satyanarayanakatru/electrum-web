"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import Logo from "../../public/Electrum_White4.png";
import NavItems from "./navItems";

export default function Navbar() {
  function myFunction(x, y) {
    var x = document.getElementById("nav_bar");
    var y = document.getElementById("hamburger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    y.classList.toggle("change");
  }

  return (
    <div>
      <header>
        <div className="header-content">
          <div className="logo">
            <div>
              <a href="">
                {/* <Image src={Logo} width={38} height={100} /> */}
              </a>
            </div>

            <div>
              <Link href="/">
                <Image src={Logo} width={100} className="logo2" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="ham_menu" id="hamburger" onClick={myFunction}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id="nav_bar">
            <div className="navbar">
              <nav>
                <NavItems />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
