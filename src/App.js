import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

const App = () => {
  const [display, setDisplay] = useState("none");

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  window.onscroll = function () {
    scrollFunc();
  };
  const TopFunc = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div>
      <Header />
      <Home />
      <Services />
      <CTA />
      <Contact />
      <Footer />
      <button
        id="myBtn"
        onClick={TopFunc}
        className={display === "none" ? "" : "show"}
      >
        &uarr;
      </button>
    </div>
  );
};

export default App;
