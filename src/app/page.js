import React from "react";
import Home from "./home/page";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}
