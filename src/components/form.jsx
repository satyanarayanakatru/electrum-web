"use client";
import React, { useState } from "react";
import "./form.css";
import Link from "next/link";
import CustomerSupport from "./customersupport";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [captcha, setCaptcha] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postal: "",
    interest: "",
    leadsource: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    debugger;
    e.preventDefault();
    if (!captcha) {
      console.log('Recaptcha not verified!');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

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
          <form id="contact-form" className="form-horizontal" method="post" onSubmit={onSubmit}>
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
                  value={formData.firstName}
                  onChange={handleChange}
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
                  value={formData.lastName}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.address}
                  onChange={handleChange}
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
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-6 col-xs-12">
                <label className="col-sm-12">Province</label>
                <select className="select" id="province" name="province" value={formData.province} onChange={handleChange}>
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
                  value={formData.postal}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12">Interest in EV Charging</label>
              <div className="col-sm-12">
                <select className="select" name="interest" value={formData.interest} onChange={handleChange}>
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
                <select className="select" name="leadsource" value={formData.leadsource} onChange={handleChange}>
                  <option value="social">Social media</option>
                  <option value="friend">From a friend</option>
                  <option value="website">On your website</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-12" htmlFor="message">
                Message
              </label>
              <div className="col-sm-12">
                <textarea
                  className="form-control text-area vresize"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="captcha">
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha} required />
            </div>
            <div className="form-group flex-group">
              <div>
                <button id="send" className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <CustomerSupport />
      <div className="bottom-cta">
        <div className="bottom-overlay"></div>
        <div className="bottom-cta-text">
          <h2>Embrace our EV future.</h2>
          <Link href="/contact" className="home-cta-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
