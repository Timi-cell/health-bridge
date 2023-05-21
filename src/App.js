import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Services />
        <CTA />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
