'use client'
import React, { useState } from "react";
import "../about/page.css";
import "./contact.css";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const newMessage = {
          name,
          email,
          message
        }

        fetch('https://portfolio-server-indol-omega.vercel.app/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage),
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSubmitted(true);
          }
        })
        .catch(err => {
          alert("Failed to send. Try again")
        })
    }
  return (
    <>
      <div className="about contact">
        <span className="page_title">Contact</span>
        <h2>Get in Touch</h2>
        <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="name">Your Name</label>
            <input required type="text" name="name"/>
            <label htmlFor="email">Your Email</label>
            <input required type="text" name="email"/>
            <label htmlFor="message">Your Message</label>
            <textarea required name="message" id="" cols="30" rows="7"></textarea>
            <input type="submit" value="Send" />
        </form>
        {submitted && <p style={{marginTop: '20px', color: 'green', fontSize: '20px'}}>Your Message Sent Successfully</p>}
      </div>
    </>
  );
};

export default Contact;
