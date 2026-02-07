import React from "react";
import Hero from "../Components/Home/Hero";
import Section2 from "../Components/Home/Section2";
import AwardsSection from "../Components/Home/AwardsSection";
import Section4 from "../Components/Home/Section4";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";

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
