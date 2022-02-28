import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr	 from-black to-[#2C3333] relative w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-[5rem] text-white font-extrabold mb-0 leading-[4rem]">
        Hello! I am Adam<span className="text-[#FF0000]">.</span>
      </h1>
      <div className="text-[2rem] leading-[1.8rem]">
        <span className="text-[#E94560]">web developer </span> <span className="text-white">/</span>{" "}
        <span className="text-[#FFAC41]">human being?</span>
      </div>
      <button className="py-1 mt-2 px-8 border-[#21E6C1] border-2 text-[#06FF00] hover:bg-[#21E6C1] tracking-wider text-lg hover:text-[#FF0000] transition-colors ease-in duration-300">Download CV</button>
    </div>
  );
};

export default Hero;
