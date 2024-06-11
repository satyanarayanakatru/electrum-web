import React from "react";
import Image from "next/image";
import NetworkPlatform from "../../../public/Network-platform.jpg";
import MobileImage1 from "../../../public/mobile1.jpg";
import MobileImage2 from "../../../public/mobile2.jpg";
import LaptopImage1 from "../../../public/laptop1.jpg";
import LaptopImage2 from "../../../public/laptop2.jpg";
import ElectrumTechnologyLogo from "../../../public/Electrum_technology_logo.png";
import PlatformImage1 from "../../../public/platform-img1.png";
import PlatformImage2 from "../../../public/platform-img2.png";
import PlatformImage3 from "../../../public/platform-img3.png";
import PlatformImage4 from "../../../public/platform-img4.png";
import PlatformImage5 from "../../../public/platform-img5.png";
import PlatformImage6 from "../../../public/platform-img6.png";
import AdminImage1 from "../../../public/admin-img1.png";
import AdminImage2 from "../../../public/admin-img2.png";
import OneToOne from "../../../public/One-to-one.png";
import OneToMany from "../../../public/One-to-many.png";
import ManyToMany from "../../../public/Many-to-many.png";
import ElectrumCloudImage from "../../../public/Electrum-Cloud.png";
import CUSTOM_BILLING from "../../../public/CUSTOM_BILLING.png";
import CONSUMPTION_DATA from "../../../public/CONSUMPTION_DATA.png";
import AUTOMATI_REMITTANCE from "../../../public/AUTOMATI_REMITTANCE.png";
import "./page.css";

function Technology() {
  return (
    <div className="technology-content">
      <div className="container">
        <div className="technology-electrum-logo-content">
          <div className="electrum-technology-logo">
            <Image src={ElectrumTechnologyLogo} alt="electrum-logo" />
          </div>
          <div className="technology-electrum-logo-inner-content">
            <p>
              Electrum is an integrated technology company that supports every
              phase in the deployment of Electric Vehicle Charging (EVC)
              projects.
            </p>
          </div>
        </div>
        <div className="network-operation-content">
          <h3>NETWORK OPERATION</h3>
          <p>
            The Electrum Cloud Platform, is an EV charger network solution and
            includes features required by developers, property managers, site
            owners and strata owners. Our platform is Open Charge Point Protocol
            (OCPP) compliant, and therefore as long as the EV chargers are OCPP
            compliant and the EV charger performance validated by Electrum
            through our quality control process, we are able to host that EV
            charger irrespective of manufacturer.
          </p>
        </div>
      </div>
      <div className="platform-content">
        <div className="container">
          <h3>PLATFORM FEATURES</h3>
          <div>
            <div className="platform-main-content">
              <div className="platform-inner-content">
                <div id="platform-image-content">
                  <Image src={PlatformImage1} alt="PlatformImage1" />
                </div>
                <div className="platform-icon-content">
                  <b>EV Charger Management</b>
                  <p>
                    Flexibility to efficiently manage and control EV chargers.
                  </p>
                </div>
              </div>
              <div className="platform-inner-content ">
                <div id="platform-image-content">
                  <Image src={PlatformImage2} alt="PlatformImage2" />
                </div>
                <div className="platform-icon-content mt-5">
                  <b>Monetization</b>
                  <p>
                    Charge the users through our wallet based system and remit
                    funds to the site owner or through QR code activation for
                    public charging
                  </p>
                </div>
              </div>
            </div>
            <div className="platform-main-content ">
              <div className="platform-inner-content">
                <div id="platform-image-content">
                  <Image src={PlatformImage3} alt="PlatformImage1" />
                </div>
                <div className="platform-icon-content">
                  <b>Remote Diagnostics</b>
                  <p>
                    Electrum can remotely and quickly diagnose EV charger
                    performance and state of charge.
                  </p>
                </div>
              </div>
              <div className="platform-inner-content">
                <div id="platform-image-content">
                  <Image src={PlatformImage4} alt="platformimage4" />
                </div>
                <div className="platform-icon-content access-control pt-4">
                  <b>Access Control</b>
                  <p>
                    For MURB residents requiring exclusive use, Electrum can
                    allocate that through the platform directed to their parking
                    stall.
                  </p>
                </div>
              </div>
            </div>
            <div className="platform-main-content">
              <div className="platform-inner-content">
                <div id="platform-image-content">
                  <Image src={PlatformImage5} alt="PlatformImage5" />
                </div>
                <div className="platform-icon-content">
                  <b>Usage Data</b>
                  <p>
                    Collection and tracking of electricity usage for billing
                    purposes required in order to capture cost for the
                    consumption of electricity.{" "}
                  </p>
                </div>
              </div>
              <div className="platform-inner-content">
                <div id="platform-image-content">
                  <Image src={PlatformImage6} alt="PlatformImage6" />
                </div>
                <div className="platform-icon-content">
                  <b>Energy Management</b>
                  <p>
                    Identify peak power usage and managing power at usage at
                    sites. Plus many more features for parkade, fleet and work
                    place customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="admin-platform">
          <p>
            The Electrum cloud platform provides a dashboard for users to manage
            and view their charging activities from their devices. Users will
            load their digital wallet for charger usage and manage charger
            authentication through their unique RFID card.
          </p>
          <div className="admin-images d-flex justify-between">
            <div className="admin-image-content">
              <Image src={AdminImage1} alt="AdminImage1" />
              <p>
                Admins can easily monitor and manage multiple charging sites.
              </p>
            </div>
            <div className="admin-image-content">
              <Image src={AdminImage2} alt="AdminImage2" />
              <p>Easy to use digital wallet with a auto-reload feature.</p>
            </div>
          </div>
          <p className="mb-5 electrum-fee-structure">
            Electrum’s fee structure is based on a transactional usage fee set
            by the site owner and Electrum takes a percentage of that usage
            charge as a fee. There are no additional annual network fees or
            expensive monthly cellular data charges like our competitors. Our
            Network agreement is a 2-year term, and strata can decide if they
            wish to continue the contract year to year after the initial term.
          </p>
        </div>
        <div className="electrum-cloud-main-content">
          <div className="electrum-cloud-left-content mr-5">
            <Image src={ElectrumCloudImage} />
            <p>
              Through the Location Admin Portal is completely new experience
              that allows you to easily access and manage your EV chargers,
              users, and monitor energy usage.
            </p>
            <div className="features-overview-content">
              <div className="mr-5">
                <b>Feature Overview:</b>
                <ul>
                  <li>EV Charger Management </li>
                  <li>Charger Security</li>
                  <li>Custom Pricing</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Energy Consumption Data </li>
                  <li>Automated Billing & Remittance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="electrum-cloud-right-content ml-5">
            <Image src={AdminImage1} />
          </div>
        </div>
        <div className="charger-management-content">
          <h3>CHARGER MANAGEMENT & SECURITY</h3>
          <p>
            Flexibility in charger management and security allows you to find
            the perfect fit on how you want your location setup
          </p>
          <div className="charger-management-inner-content mt-5">
            <div className="many-images-content">
              <div>
                <Image src={OneToOne} alt="OneToOne" />
              </div>
              <div>
                <p>
                  One-to-one Secure the charger to only activate by one token.
                </p>
              </div>
            </div>
            <div className="many-images-content">
              <div>
                <Image src={OneToMany} alt="OneToMany" />
              </div>
              <div>
                <p>
                  One-to-many Secure the charger to only activate by one token
                </p>
              </div>
            </div>
            <div className="many-images-content">
              <div>
                <Image src={ManyToMany} alt="ManyToMany" />
              </div>
              <div>
                <p>Many-to-many Allow activation of chargers to many fobs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-billing-content">
        <div className="container">
          <div className="custom-inner-content">
            <div className="mr-5">
              <h5>FLEXIBILITY IN CUSTOM BILLING</h5>
              <p>
                Mix and match settings to find the best rate for your location.
                We’ve designed the billing system to be granular to allow for
                you to set it up how you see fit.
              </p>
            </div>
            <div className="ml-5">
              <Image src={CUSTOM_BILLING} alt="CUSTOM_BILLING" />
            </div>
          </div>
          <div className="custom-inner-content">
            <div className="mr-5">
              <Image src={CONSUMPTION_DATA} alt="CONSUMPTION_DATA" />
            </div>
            <div className="ml-5">
              <h5>CONSUMPTION DATA</h5>
              <p>
                Immediate access to your locations energy consumption data and
                amounts collected for auto remittance.
              </p>
            </div>
          </div>
          <div className="custom-inner-content">
            <div className="mr-5">
              <h5>AUTOMATIC REMITTANCE</h5>
              <p>
                Setup your banking information through our secure payment system
                to get automated direct deposits into your bank. No more
                physical cheques!
              </p>
            </div>
            <div className="ml-5">
              <Image src={AUTOMATI_REMITTANCE} alt="AUTOMATI_REMITTANCE" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Image src={NetworkPlatform} alt="network-image" />
      </div>
    </div>
  );
}

export default Technology;
