"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import Logo from "../../public/images/logo.png";
import Logo2 from "../../public/images/electrum-logo3.png";
import FormModal from "./contactModal";
import NavItems from "./navItems";

export default function Navbar() {
  function myFunction(e) {
    e.preventDefault();
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <div>
              <a href="">
                <Image src={Logo} width={38} height={100} />
              </a>
            </div>

            <div>
              <a href="">
                <Image src={Logo2} width={100} className="logo2" />
              </a>
            </div>
          </div>
          <div>
            <NavItems />
          </div>
          <div className="search-icon">
            <a href="">
              <FaSearch size={20} onClick={myFunction} />
            </a>
          </div>
          <div id="myDIV">
            <input type="search" name="" placeholder="Search here..." />
          </div>
          <FormModal />
        </nav>
      </header>
    </div>
  );
}
