

import React, { useEffect, useState } from 'react';

const images = [
  '/hero.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg',
  'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg',
];

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f1f1f0] px-20 md:px-12 mt-18 py-4">
      <div className=" overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-[220px] sm:h-[300px] md:h-[291px] object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Herosection;


