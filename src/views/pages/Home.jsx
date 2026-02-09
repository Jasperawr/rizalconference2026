import React from "react";

import Navbar from "../../components/mini/NavbarSide";
import NavbarTop from "../../components/mini/NavbarTop";

import About from "../About";
import Contact from "../../components/Contact";
import Venue from "../../views/Venue";
import Objectives from "../../views/Objectives";
import Header from "../../views/Header";

const Home = () => {
  return (
    <div className="relative font-poppins">
      <NavbarTop />
      <Navbar />
      <Header />
      <Contact />
      <About />
      <Objectives />
      <Venue />
    </div>
  );
};

export default Home;
