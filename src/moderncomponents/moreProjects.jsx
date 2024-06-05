import Link from 'next/link'
import React from 'react'
import "./moreprojects.css";

function MoreProjects() {
  return (
    <div className='more-projects'>
        <Link href="/blog/case-studies-and-success-stories">To See More Projects Click Here</Link>
    </div>
  )
}

export default MoreProjects;