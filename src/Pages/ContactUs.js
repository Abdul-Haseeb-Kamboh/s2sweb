import React, { useState } from "react";
import mobile from "../images/mobile.png";
import mail from "../images/mail.jpg";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {};

  const handleSubmit = () => {};

  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={mail} alt="email" />
            <a
              href="mailto:abdulhaseeb4452@gmail.com"
              className="p-text"
              style={{ color: "rgba(56,54,54,1)" }}
            >
              abdulhaseeb1344@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="phone" />
            <a
              href="tel:+923101344520"
              className="p-text"
              style={{ color: "rgba(56,54,54,1)" }}
            >
              +923101344520
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;
