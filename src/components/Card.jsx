import React from "react";
import "../scss/card.scss";

const Card = ({ children, icon, text }) => {
  return (
    <div className="card">
      {icon}
      <h1>Health•Bridge</h1>
      <h2>{text}</h2>
      {children}
    </div>
  );
};

export default Card;
