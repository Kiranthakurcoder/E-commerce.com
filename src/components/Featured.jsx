import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 pb-20 border-amber-50">
        <h1 className='text-7xl text-amber-50 font-["Neue Montreal"]'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="Cards flex gap-10 w-full mt-10">
          <div className="carrd-container relative h-[80vh] w-1/2">
            <h1 className="absolute left-full z-[9] text-7xl text-yellow-100 leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"type".split("" ).map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="bg-cover bg-center w-full h-full"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </div>

          <div className="carrd-container relative h-[80vh] w-1/2">
            <h1 className="absolute right-full z-[9] text-7xl text-yellow-100 leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2">
              {"KIRAN".split("" ).map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="bg-cover bg-center w-full h-full"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured