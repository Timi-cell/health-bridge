import React from "react";
import "../scss/footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <h1>Health•Bridge</h1>
        <div className="icons">
          <AiFillFacebook size={25} color="#000" />
          <BsTwitter size={25} color="#000" />
          <BsLinkedin size={25} color="#000" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
