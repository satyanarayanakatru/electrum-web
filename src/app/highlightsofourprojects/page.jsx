import React from "react";
import Image from "next/image";
import HighlightProject1 from "../../../public/Highlight-Projects-1.jpg";
import HighlightProject2 from "../../../public/Highlight-Projects-2.jpg";
import HighlightProject3 from "../../../public/Highlight-Projects-3.jpg";
import HighlightProject4 from "../../../public/Highlight-Projects-4.jpg";
import './page.css'

function HighlightsOfProjects() {
  return (
    <div className="highlightsofprojects">
      <div className="container">
        <Image src={HighlightProject1} alt="highlight project image"/>
        <Image src={HighlightProject2} alt="highlight project image"/>
        <Image src={HighlightProject3} alt="highlight project image"/>
        <Image src={HighlightProject4} alt="highlight project image"/>
      </div>
    </div>
  );
}

export default HighlightsOfProjects;
