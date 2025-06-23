
import React from "react";
import Navbar from "./Navbar";
import ShopSection from "./ShopSection";
import Footer from "./Footer";
import Heading from "./Heading";
import FeatureSection from "./FeatureSection";
import Shutter from "./Shutter";

const Home = () => {
  return (
    <>
      <Shutter />
      <div className="bg-[#f1f1f0] overflow-hidden w-full min-h-screen">
        <Navbar />
        <Heading />
        <ShopSection />
        <FeatureSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
