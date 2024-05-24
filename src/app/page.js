import React from "react";
import Home from "./home/page";
import Navbar from "@/modrencomponents/navbar";
import Footer from "@/modrencomponents/footer";


export default function LandingPage() {
  return (
    <div>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}
