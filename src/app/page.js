import React from "react";
import Home from "./home/page";
import Navbar from "@/moderncomponents/navbar";
import Footer from "@/moderncomponents/footer";
import Head from "next/head";



export default function LandingPage() {
  return (
    <div>
      <Head/>
      <link rel="icon" href="/icon.png" />
      <Head/>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}
