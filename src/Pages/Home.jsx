import React from "react";
import Hero from "../Components/Hero";
import Section2 from "../Components/Section2";
import AwardsSection from "../Components/AwardsSection";
import Section4 from "../Components/Section4";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar shadow={" bg-black/30 backdrop-blur-sm"} />
      <Hero />
      <Section2 />
      <AwardsSection />
      <Section4 />
      <Footer />
    </>
  );
}

export default Home;
