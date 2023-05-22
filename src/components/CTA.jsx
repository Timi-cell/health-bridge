import React from "react";
import "../scss/cta.scss";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <div className="image">
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684784762/linkedin-sales-solutions-1LyBcHr_cs8msi.jpg"
          alt="a man and a woman on a video call"
        />
      </div>
      <div className="card-cta">
        <div className="card-content">
          <h2>JOIN US TODAY AT HEALTH BRIDGE!</h2>
          <p>
            Stay in touch with family members and stay updated about your family
            health status
          </p>
          <Link to="/signup">
            <button>Sign Up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
