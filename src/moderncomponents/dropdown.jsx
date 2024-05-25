import React from "react";
import Link from "next/link";
import './dropdown.css'
const Dropdown = (props) => {
  return (
    <div className="drop-content">
      {props.isVisible ? (
        <ul>
          <li><Link href="/singlefamilyresidential">Single Family Residential</Link></li>
          <li><Link href="/multiunitresidential">Multi Unit Residential</Link></li>
          <li><Link href="/workplace">Workplace</Link></li>
          <li><Link href="/public">Public</Link></li>
          <li><Link href="/fleet">Fleet</Link></li>
        </ul>
      ) : null}
      
    </div>
  );
}

export default Dropdown;
