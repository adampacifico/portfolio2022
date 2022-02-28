import React from "react";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  const style = {
    pcenter:
      "grid place-content-center sm:text-[5.5rem] lg:text-[5rem] p-3 border rounded-full drop-shadow-lg shadow-lg aspect-square",
    mainContainer:
      "min-h-screen h-auto max-w-[800px] mx-auto uppercase flex items-center flex-col justify-center snap-start transition-all duration-500 ease-in",
    icontainer:
      "max-w-[800px] w-full grid px-4 text-[#2C3333] grid-cols-4 gap-x-2 gap-y-8 mt-4 text-[2.5rem] sm:text-[4rem] md:w-[80%] md:gap-2 lg:w-full lg:flex lg:justify-between lg:px-0",
  };
  return (
    <div className={style.mainContainer}>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-bold text-[2rem] sm:text-[2.5rem]"
      >
        About Me
      </motion.h2>
      <motion.p
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, delay: 1 }}
        className="lg:w-full px-4 md:px-16 lg:px-0 text-justify text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem]"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nemo
        repellendus, voluptatem eius soluta asperiores iusto, commodi quibusdam
        repudiandae velit incidunt? Quos molestiae iure voluptas nulla!.
      </motion.p>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, delay: 1.5 }}
        className="font-bold text-[2rem] sm:text-[2.5rem] mt-0 lg:mt-8"
      >
        Skills
      </motion.h2>
      <div className={style.icontainer}>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <FaHtml5 />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <FaCss3 />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 1.4, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <IoLogoJavascript />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 1.6, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <FaReact />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <FaBootstrap />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <SiTailwindcss />
        </motion.div>
        <motion.div
          whileInView={{ rotate: 360, opacity: [0, 1] }}
          transition={{ duration: 2.2, delay: 1, ease: "easeInOut" }}
          className={style.pcenter}
        >
          <FaGitAlt />
        </motion.div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [15, 0] }}
        transition={{ duration: 1, delay: 1 }}
        className="flex w-full justify-around mt-6 lg:mt-8 px-2 sm:px-0"
      >
        <a className="text-[0.7rem] md:text-[1.2rem] hover:font-bold cursor-pointer">
          Responsive Web Design Cert.
        </a>
        <a className="text-[0.7rem] md:text-[1.2rem] hover:font-bold cursor-pointer">
          Frontend Libraries Cert.
        </a>
      </motion.div>
      <motion.a
        whileInView={{ opacity: [0, 1], y: [15, 0] }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-10 lg:mt-32 font-bold"
      >
        Download CV
      </motion.a>
    </div>
  );
};

export default About;
