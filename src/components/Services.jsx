import React from "react";
import "../scss/services.scss";
import { GiHealthNormal } from "react-icons/gi";
import { BsFillCalendarDateFill, BsCameraVideoFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { SiPaypal } from "react-icons/si";
// import { BiPhoneCall } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";

const logo1 = <GiHealthNormal size={50} color="red" />;
const logo2 = <BsFillCalendarDateFill size={50} color="red" />;
const logo3 = <AiFillDashboard size={50} color="red" />;
const logo4 = <SiPaypal size={50} color="red" />;
const logo5 = <BsCameraVideoFill size={50} color="red" />;
const logo6 = <AiFillCar size={50} color="red" />;

const ServiceBlock = ({ text, logo }) => {
  return (
    <div className="service">
      <div>{logo}</div>
      <p>{text}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>• What we offer •</h2>
      <div className="services-block">
        <ServiceBlock text={"Family healthcare services"} logo={logo1} />
        <ServiceBlock
          text={"Efficient booking system to schedule healthcare services"}
          logo={logo2}
        />
        <ServiceBlock
          text={
            "Tracking of health status, upcoming appointments and medical history"
          }
          logo={logo3}
        />
        <ServiceBlock text={"Safe and secure payment portal"} logo={logo4} />
        <ServiceBlock
          text={
            "Virtual consultations & communication between you and medical professionals"
          }
          logo={logo5}
        />
        <ServiceBlock
          text={
            "Transportation system to and from the hospital for appointments"
          }
          logo={logo6}
        />
      </div>
    </div>
  );
};

export default Services;

// <div className="services-block">
//   {/* <ServiceBlock
//     text="Optimal health-care services"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618153/ani-kolleshi-7jjnJ-QA9fY-unsplash_qasnkg.jpg"
//   />
//   <ServiceBlock
//     text="Well designed dashboard to track health status and more"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618151/myriam-jessier-eveI7MOcSmw-unsplash_tyozev.jpg"
//   />
//   <ServiceBlock
//     text="Safe and secure payment portal"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618230/viktor-forgacs-ep4yZx4taUY-unsplash_sorydz.jpg"
//   />
//   <ServiceBlock
//     text="Virtual communication between users and medical professionals"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618248/linkedin-sales-solutions-1LyBcHrH4J8-unsplash_vsmpeo.jpg"
//   />
//   <ServiceBlock
//     text="Connecting families home and abroad"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618215/kevin-delvecchio-7noZJ_4nhU8-unsplash_hl9v3w.jpg"
//   />
//   <ServiceBlock
//     text="Efficient transportation system for patients"
//     imgSrc="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684618212/why-kei-8e2gal_GIE8-unsplash_dphdob.jpg"
//   /> */}
// </div>
