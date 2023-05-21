import React from "react";
import "../scss/contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us At Health Bridge</h2>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Message" id="message" />
          {/* <input type="text" placeholder="name" /> */}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
