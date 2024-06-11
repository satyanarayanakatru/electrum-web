import React, { useState } from "react";
import "./DropdownMenu.css";
import Link from "next/link";

const DropdownMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  return (
    <div
      className="navbar-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="nav-link">SOLUTIONS</button>
      {isHovered && (
        <div className="dropdown-content">
          <div className="dropdown-section">
            <ul>
              {/* <li><Link href="/singlefamilyresidential">Single Family Residential</Link></li> */}
              <li>
                <Link href="/multiunitresidential">Multi-Unit Residential</Link>
              </li>
              <li>
                <Link href="/workplace">Workplace</Link>
              </li>
              <li>
                <Link href="/public">Public</Link>
              </li>
              <li>
                <Link href="/fleet">Fleet</Link>
              </li>
              <li>
                <Link href="/technology">Technology</Link>
              </li>
            </ul>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
