import React from "react";
import Home from "./home/page";
import Navbar from "@/moderncomponents/navbar";
import Footer from "@/moderncomponents/footer";



export default function LandingPage() {
  return (
    <div>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}
