import React from "react";
import "./form.css";
import Link from "next/link";
import CustomerSupport from "./customersupport";

const Form = () => {
  return (
    <div>
      <div className="electrum-contact">
        <div className="electrum-banner page-banner">
          <div className="banner-overlay"></div>
          <div className="page-banner-text">
            <div className="banner-title">
              <h1>Contact us</h1>
            </div>
            <div className="banner-text">
              <p>
                Considering an EV Charging Project? Want to learn more about
                commercial or residential EV charging stations? Our team of
                experts is happy to help.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form id="contact-form" className="form-horizontal" method="post">
            <div className="form-group">
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">
                  First Name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">
                  Last Name <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">
                  Email <span className="required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">
                  Phone <span className="required-asterisk">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">
                  City <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">Province</label>
                <select className="select" id="province" name="province">
                  <option>British Columbia</option>
                  <option>Alberta</option>
                  <option>Saskatchewan</option>
                  <option>Manitoba</option>
                  <option>Ontario</option>
                  <option>Quebec</option>
                  <option>Newfoundland</option>
                  <option>New Brunswick</option>
                  <option>Nova Scotia</option>
                  <option>Prince Edward Island</option>
                  <option value="yt">Yukon</option>
                  <option value="nt">Northwest Territories</option>
                  <option value="nu">Nunavut</option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="postal"
                  name="postal"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12">Interest in EV Charging</label>
              <div className="col-sm-12">
                <select className="select" name="interest">
                  <option value="single">
                    Single-Family Residential Building
                  </option>
                  <option value="multi">Multi-Unit Residential Building</option>
                  <option value="workplace">Workplace</option>
                  <option value="public">Public</option>
                  <option value="fleet">Fleet</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12">How did you hear about us?</label>
              <div className="col-sm-12">
                <select className="select" name="leadsource">
                  <option value="social">Social media</option>
                  <option value="friend">From a friend</option>
                  <option value="website">On your website</option>
                  <option value="other">OtNameher</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" for="message">
                Message
              </label>
              <div className="col-sm-12">
                <textarea
                  className="form-control text-area vresize"
                  rows="8"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <input
              type="hidden"
              name="_csrf"
              value="MJRxcFsq-IEKuVnCqO4Wckb0SstDqhHzbIpE"
            />

            <div className="form-group flex-group">
              <div>
                <button id="send" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <CustomerSupport/>

      <div className="bottom-cta">
        <div className="bottom-overlay"></div>
        <div className="bottom-cta-text">
          <h2>Embrace our EV future.</h2>
          <Link href="/contact" className="home-cta-btn">
            {" "}
            Get started{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
