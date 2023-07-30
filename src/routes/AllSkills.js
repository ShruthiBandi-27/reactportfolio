import React from "react";
import Skills from "../components/Skills";
import MainImg2 from "../components/MainImg2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllSkills = () => {
  return (
    <div>
      <Navbar />
      <MainImg2 heading="Skills"/>
      <Skills/>
      <Footer />
    </div>
  );
};

export default AllSkills;
