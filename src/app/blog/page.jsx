"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./carbon-credit-aggregation/page";
import CarbonCreditImage from "../../../public/images/carbon-credit-blog.jpg";
import Sustainabilty from "../../../public/images/sustainabilty.jpg";
import Incentives from "../../../public/images/incentives.jpg";
import Casestudy from "../../../public/images/case-study.jpg";
import Evcharging from "../../../public/images/ev-charging.jpg";
import "./page.css";

function Blog(props) {
  const data = [
    {
      image: CarbonCreditImage,
      title: "BLOG",
      heading: "How Does Carbon Credit Aggregation Work?",
      link: "/blog/carbon-credit-aggregation",
    },
    {
      image: Incentives,
      title: "BLOG",
      heading: "Government Rebates and Incentives",
      link: "/blog/government-incentives",
    },
    {
      image: Casestudy,
      title: "BLOG",
      heading: " Case Studies and Success Stories",
      link: "/blog/case-studies-and-success-stories",
    },
    {
      image: Evcharging,
      title: "BLOG",
      heading: " EV Charging 101",
      link: "/blog/evcharging101",
    },
    {
      image: Sustainabilty,
      title: "BLOG",
      heading: " Sustainability and Innovation",
      link: "/blog/sustainability-and-innovation",
    },
    

  ];
  return (
    <div className="blogs">
      <div className="blog-content">
        {data.map((items, index) => {
          return (
            <div key={index} className="blog-card">
              <div className="blog-card-image">
                <Link href={items.link}>
                  <Image
                    src={items.image}
                    alt="blog-image"
                    className="blog-image"
                  />
                </Link>
              </div>
              <div className="blog-info">
                <h6>{items.title}</h6>
                <Link href={items.link}>{items.heading}</Link>
              </div>
            </div>
          );
        })}
      </div>
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
