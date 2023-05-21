import React from "react";
// import Header from "./Header";
// import HomeImg from "../home.jpg";
import "../scss/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2>BRIDGING THE GAP OF HEALTH-CARE BETWEEN FAMILIES...</h2>
        <Link to="/signup">
          <button className="button">GET STARTED &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
