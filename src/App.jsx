import React from "react";
import Navbar from "./components/Navbar";

import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";

import Heading from "./components/Heading";

import FeatureSection from "./components/FeatureSection";
import Shutter from "./components/Shutter";

const App = () => {
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

export default App;
