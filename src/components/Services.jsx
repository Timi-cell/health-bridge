import React from "react";
import "../scss/services.scss";

const ServiceBlock = ({ text, imgSrc }) => {
  return (
    <div className="service">
      <img src={imgSrc} alt="serviceImage" />
      <h3>{text}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>• What we offer •</h2>
      <div className="services-block">
        <ServiceBlock
          text="Optimal health-care services"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618153/ani-kolleshi-7jjnJ-QA9fY-unsplash_qasnkg.jpg"
        />
        <ServiceBlock
          text="Well designed dashboard to track health status and more"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618151/myriam-jessier-eveI7MOcSmw-unsplash_tyozev.jpg"
        />
        <ServiceBlock
          text="Safe and secure payment portal"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618230/viktor-forgacs-ep4yZx4taUY-unsplash_sorydz.jpg"
        />
        <ServiceBlock
          text="Virtual communication between users and medical professionals"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618248/linkedin-sales-solutions-1LyBcHrH4J8-unsplash_vsmpeo.jpg"
        />
        <ServiceBlock
          text="Connecting families home and abroad"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618215/kevin-delvecchio-7noZJ_4nhU8-unsplash_hl9v3w.jpg"
        />
        <ServiceBlock
          text="Efficient transportation system for patients"
          imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618212/why-kei-8e2gal_GIE8-unsplash_dphdob.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
