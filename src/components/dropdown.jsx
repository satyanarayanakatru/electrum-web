import React from "react";


const Dropdown = (props) => {
  return (
    <div className="drop-content">
      {props.isVisible ? (
        <ul>
          <li>
            <a href="/singlefamilyresidential">Single-Family Residential</a>
          </li>
          <li>
            <a href="/multiunitresidential">Multi-Unit Residential Building</a>
          </li>
          <li>
            <a href="/workplace">Workplace</a>
          </li>
          <li>
            <a href="/public">Public</a>
          </li>
          <li>
            <a href="/fleet">Fleet</a>
          </li>
        </ul>
      ) : null}
      
    </div>
  );
}

export default Dropdown;
