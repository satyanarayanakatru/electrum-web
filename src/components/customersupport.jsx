import React from "react";
import Image from "next/image";
import CustomerSupportIcon from "../../public/images/customer-support.svg";
import MailAddressIcon from "../../public/images/mailing-address.svg";
import "./customersupport.css";

const CustomerSupport = () => {
  return (
    <div>
      <div className="container customer-support">
        <div className="customer-support-content">
          <Image
            src={CustomerSupportIcon}
            alt="customer-support"
            width={50}
            height={50}
          />
          <h6>CUSTOMER SUPPORT</h6>
          <p>1-866-898-3873</p>
          <p>support@electrumcharging.com</p>
        </div>
        <div className="customer-support-content mailing-address">
          <Image
            src={MailAddressIcon}
            alt="mailing-address"
            width={50}
            height={80}
          />
          <h6>MAILING ADDRESS</h6>
          <p>
            104 - 17741 65A Ave <br />
            Surrey, BC V3S 1Z8 <br />
            Canada
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
