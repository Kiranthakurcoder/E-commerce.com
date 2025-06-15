// Shutter.js
import React, { useEffect, useState } from "react";

const Shutter = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); // after animation, hide the shutter
    }, 700); // 1.5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-700 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    ></div>
  );
};

export default Shutter;
