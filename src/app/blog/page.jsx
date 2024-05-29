import React from 'react';
import Image from 'next/image';
import CaseStudy1 from '../../../public/images/casestudy1.png'
import CaseStudy2 from '../../../public/images/casestudy2.png'
import CaseStudy3 from '../../../public/images/casestudy3.png'
import CaseStudy4 from '../../../public/images/casestudy4.png'
import './page.css'

export default function Blog() {
  return (
    <div className='casestudy-content'>
        <div className='container'>
            <Image src={CaseStudy1} className='caseimage caseimage1' alt='case-image'/>
            <Image src={CaseStudy2} className='caseimage' alt='case-image'/>
            <Image src={CaseStudy3} className='caseimage' alt='case-image'/>
            <Image src={CaseStudy4} className='caseimage' alt='case-image'/>
        </div>
    </div>
  )
}