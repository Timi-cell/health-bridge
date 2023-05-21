import React, { useState } from "react";
import "../scss/header.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="head">
        <h1>Health•Bridge</h1>
        <div className="icon">
          <HiMenuAlt3 size={40} color="red" onClick={showNavBar} />
        </div>
      </div>
      <ul className={`header-content mob ${isOpen ? "showMob" : ""}`}>
        <li>Home</li>
        <a href="#services">
          {" "}
          <li>Services</li>{" "}
        </a>
        <a href="#contact">
          <li>Contact Us</li>
        </a>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <button id="last">Sign Up</button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
