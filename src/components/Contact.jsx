import React from "react";
import "../scss/contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us At Health Bridge</h2>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required/>
          <textarea type="text" placeholder="Message" id="message"  required/>
          <button type="submit" className="button">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
