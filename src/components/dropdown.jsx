import React from "react";

const Dropdown = (props) => {
  
  return (
    <div className="drop-content">
      {props.isVisible ? (
        <ul>
          <div className="d-flex">
            <div className="home-modal-left">
              <p>
                We serve global EV charging network operators and providers with
                a scalable, hardware-agnostic platform, generating proﬁts for
                the world’s largest charging networks and new market entrants.
              </p>
            </div>
            <div className="home-modal-right">
              <h4>SECTORS</h4>
              <ul>
                <li>
                  <a href="" >Utilities</a>
                </li>
                <li>
                  <a href="">Oil and Gas</a>
                </li>
                <li>
                  <a href="">Automotive</a>
                </li>
                <li>
                  <a href="">Charging Point Operators</a>{" "}
                </li>
                <li>
                  <a href="">Electric Mobility Service Providers</a>
                </li>
                <li>
                  <a href="">Electric Vehicles Service Providers</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
