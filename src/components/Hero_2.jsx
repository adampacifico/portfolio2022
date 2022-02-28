import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowUpSquare } from "react-icons/bs";

const Hero_2 = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      id="home"
      className="max-w-[800px] mx-auto h-screen grid place-content-center text-center snap-start"
    >
      {console.log(inView)}
      <motion.h1
        whileInView={{ opacity: [0, 1] }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="text-[5rem] xsm:text-[6.5rem] lg:text-[8rem] sm:-rotate-[8deg] rotate-0"
        // data-aos="zoom-out"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        Adam Pacifico
      </motion.h1>
      <motion.p
        whileInView={{ opacity: [0, 1], x: [40, 0] }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
        className="text-[2rem] lg:text-[2.5rem] "
      >
        Web Developer
      </motion.p>
      {inView ? (
        ""
      ) : (
        <a
          href="#home"
          className="fixed bottom-0 right-0 lg:bottom-10 opacity-60 hover:opacity-100 cursor-pointer lg:right-20 text-[1.5rem] animate-bounce md:text-[3rem]"
        >
          <BsArrowUpSquare />
        </a>
      )}
    </div>
  );
};

export default Hero_2;
