import React from "react";
// import Header from "./Header";
// import HomeImg from "../home.jpg";
import "../scss/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* <img
        src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618153/ani-kolleshi-7jjnJ-QA9fY-unsplash_qasnkg.jpg"
        alt="banner"
      /> */}
      <div className="home-content">
        <div className="text">
          <h2>BRIDGING THE GAP OF HEALTHCARE BETWEEN FAMILIES</h2>
          <p>
            It doesn't matter where you are, Connect with your family back home
            and unlock health-care services for them
          </p>
          <Link to="/signup">
            <button className="button">GET STARTED &rarr;</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
