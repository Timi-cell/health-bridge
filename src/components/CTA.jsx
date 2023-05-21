import React from "react";
import "../scss/cta.scss";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <div className="card-cta">
        <div className="card-content">
          <h2>JOIN US TODAY AT HEALTH BRIDGE!</h2>
          <p>
            Stay in touch with family members and stay updated about your health
            status.
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
