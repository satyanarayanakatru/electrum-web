"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";
import Logo from "../../public/images/electrum-logo3.png";
import FormModal from "./contactModal";
import NavItems from "./navItems";

export default function Navbar() {
  const search = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <div>
              <a href="">
                {/* <Image src={Logo} width={38} height={100} /> */}
              </a>
            </div>

            <div>
              <a href="">
                <Image src={Logo} width={100} className="logo2" alt="logo"/>
              </a>
            </div>
          </div>
          <div>
            <NavItems />
          </div>
          
          <FormModal />
        </nav>
      </header>
    </div>
  );
}
