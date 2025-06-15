import React from "react";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#f1f1f0] w-full min-h-[20rem] md:min-h-[28rem]  flex flex-col justify-center px-4 sm:px-8"
    >
      <h1 className="text-neutral-950 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-light text-center leading-tight">
        New Collections
      </h1>

      <p className="text-center text-[#8f8f8f] mt-6 max-w-3xl mx-auto text-sm sm:text-base px-2">
        “Step into the season with fresh styles that speak confidence and
        elegance. From everyday essentials to bold statement pieces — we’ve got
        everything you need to stand out.”
      </p>
    </motion.div>
  );
};

export default Heading;
