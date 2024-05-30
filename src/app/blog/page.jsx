"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../blog/ev-charging-energy-blog/page";
import CarbonCreditImage from "../../../public/images/carbon-credit-blog.jpg";
import "./page.css";


function Blog(props) {
  const data = [
    {
      image: CarbonCreditImage,
      title: "BLOG",
      heading: "How Does Carbon Credit Aggregation Work?",
    },
   
   
  ];
  return (
    <div>
      {data.map((items) => {
        return (
          <div className="blog-content">
            <div className="container">
              <div className="blog-card">
              <div className="blog-card-image">
                <Link href="/blog/ev-charging-energy-blog">
                  <Image src={items.image} alt="blog-image" className="blog-image"/>
                </Link>
              </div>
              <div className="blog-info">
                <h6>{items.title}</h6>
                <Link href="/blog/ev-charging-energy-blog">{items.heading}</Link>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <div className="blog-content">
    //   <div className="container">
    //     <div className="blog-card">
    //       <div className="blog-card-image">
    //         <Link href="/blog/ev-charging-energy-blog">
    //           <Image src={CarbonCreditImage} className="blog-image" />
    //         </Link>
    //       </div>
    //       <div className="blog-info">
    //         <h6>BLOG</h6>
    //         <Link href="/blog/ev-charging-energy-blog">
    //           How Does Carbon Credit Aggregation Work?
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Blog;
