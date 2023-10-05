'use client'
import React, { useState } from "react";
import "../about/page.css";
import "./contact.css";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
  return (
    <>
      <div className="about contact">
        <span className="page_title">Contact</span>
        <h2>Get in Touch</h2>
        <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name"/>
            <label htmlFor="email">Your Email</label>
            <input type="text" name="email"/>
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="" cols="30" rows="7"></textarea>
            <input type="submit" value="Send" />
        </form>
        {submitted && <p>Your Message Sent Successfully</p>}
      </div>
    </>
  );
};

export default Contact;
