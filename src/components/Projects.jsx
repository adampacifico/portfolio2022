import React, { useState } from "react";
import { SiNetflix, SiTesla } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { RiSpotifyLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { GiFairyWand } from "react-icons/gi";
import "./Project.css";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion";

const Projects = () => {
  const [hover, setHover] = useState("");

  const Links = ({ children, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        id="proj"
        className="h-[6rem] w-[6rem] sm:h-[4rem] sm:w-[4rem] md:w-[7rem] md:h-[7rem] lg:w-[10rem] lg:h-[10rem] cursor-pointer grid place-content-center"
      >
        {children}
      </a>
    );
  };

  const style = {
    title:
      "text-[1rem] text-center absolute -bottom-[30px] right-0 left-0 transition-all duration-500 ease-in-out",
    pcenter:
      "grid place-content-center aspect-video p-2 relative hover-trigger drop-shadow-md shadow-lg  border hover:border-black transition-colors duration-200 lg:p-4 md:m-2",
    details:
      "fixed -top-[200px] right-0 bg-gray-200 text-black-400 p-0 w-full h-fit transition-all ease-in-out duration-500 text-[12px] lg:text-lg lg:p-4 text-start sm:w-fit flex md:block md:text-justify ",
  };
  return (
    <div className="min-h-screen h-auto relative max-w-[800px] mx-auto uppercase flex justify-center items-center flex-col snap-start">
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-[2.5rem] font-bold"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 w-full text-[4rem] md:text-[6rem] md:grid-cols-3">
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1 }}
          onMouseEnter={() => setHover("netflix")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links link="https://netflix-clone-app-d1abb.web.app/">
            <SiNetflix className={isMobile ? "" : "hover-triggers"} />
            {hover === "netflix" ? (
              <span className="lg:block">netflix clone</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1, delay: 0.2 }}
          onMouseEnter={() => setHover("disney")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links link="https://disney-clone-app-8fe71.web.app/home">
            <GiFairyWand className={isMobile ? "" : "hover-triggers"} />
            <div className="hover-target absolute  text-[0.7rem] h-[100%] hidden lg:flex justify-center flex-col right-4 opacity-0">
              <p>Firebase</p>
              <p>React</p>
              <p>Styled-components</p>
              <p>TMDB API</p>
            </div>
            {hover === "disney" ? (
              <span className="hidden lg:block">disney clone</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1, delay: 0.4 }}
          onMouseEnter={() => setHover("spotify")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links link="https://lowcostspotify.netlify.app/">
            <RiSpotifyLine className={isMobile ? "" : "hover-triggers"} />
            <div className="hover-target absolute  text-[0.7rem] h-[100%] hidden lg:flex  justify-center flex-col right-4 opacity-0">
              <p>Firebase</p>
              <p>React</p>
              <p>Styled-components</p>
              <p>TMDB API</p>
            </div>
            {hover === "spotify" ? (
              <span className="hidden lg:block">spotify clone</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1, delay: 0.6 }}
          onMouseEnter={() => setHover("tesla")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links link="https://tesla-clone-app-9da84.web.app/">
            <SiTesla className={isMobile ? "" : "hover-triggers"} />
            <div className="hover-target absolute  text-[0.7rem] h-[100%] hidden lg:flex  justify-center flex-col right-4 opacity-0">
              <p>Firebase</p>
              <p>React</p>
              <p>Styled-components</p>
              <p>TMDB API</p>
            </div>
            {hover === "tesla" ? (
              <span className="hidden lg:block">tesla clone</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>

        {/* <div className="flex justify-center mt-8 items-center max-w-[900px] w-[900px] text-[6rem] mb-4"> */}
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1, delay: 0.8 }}
          onMouseEnter={() => setHover("chat")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links link="https://cheatchat-app.web.app/chats">
            <BiMessageDots className={isMobile ? "" : "hover-triggers"} />
            <div className="hover-target absolute  text-[0.7rem] h-[100%] hidden lg:flex  justify-center flex-col right-4 opacity-0">
              <p>Firebase</p>
              <p>React</p>
              <p>Styled-components</p>
              <p>TMDB API</p>
            </div>
            {hover === "chat" ? (
              <span className="hidden lg:block">chat system</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], rotate: 360 }}
          transition={{ duration: 1, delay: 1 }}
          onMouseEnter={() => setHover("employee")}
          onMouseLeave={() => setHover("")}
          className={style.pcenter}
        >
          <Links>
            <FaUsers className={isMobile ? "" : "hover-triggers"} />
            <div className="hover-target absolute  text-[0.7rem] h-[100%] hidden lg:flex  justify-center flex-col right-4 opacity-0">
              <p>Firebase</p>
              <p>React</p>
              <p>Styled-components</p>
              <p>TMDB API</p>
            </div>
            {hover === "employee" ? (
              <span className="hidden lg:block">employee crud</span>
            ) : (
              ""
            )}
          </Links>
        </motion.div>
      </div>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-[1.5rem] mt-0 lg:mt-4 font-bold sm:text-[2.5rem]"
      >
        Freecodecamp.org Projects
      </motion.h2>
      <div className="grid grid-cols-2 text-[1rem] md:text-[1.3rem] lg:grid-cols-4 place-items-center gap-3 w-full pt-4">
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
          id="fcc"
        >
          calculator
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.3 }}
          id="fcc"
        >
          documentation
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.4 }}
          id="fcc"
        >
          drum machine
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
          id="fcc"
        >
          landing page
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
          id="fcc"
        >
          Tribute page
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.7 }}
          id="fcc"
        >
          survey form
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.8 }}
          id="fcc"
        >
          random quote
        </motion.a>
        <motion.a
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.9 }}
          id="fcc"
        >
          code-previewer
        </motion.a>
      </div>
      <div
        id="details"
        className={style.details.concat(
          hover ? "opacity-1 top-[0] " : "opacity-0 -top-[200]"
        )}
        // className={}
      >
        {hover === "netflix" ? (
          <>
            <p>•REACt</p>
            <p>•Tmdb api</p>
            <p>•styled-components</p>
            <p>•Firebase</p>
          </>
        ) : (
          ""
        )}
        {hover === "disney" ? (
          <>
            <p>•REACt</p>
            <p>•redux</p>
            <p>•styled-components</p>
            <p>•Firebase</p>
          </>
        ) : (
          ""
        )}
        {hover === "spotify" ? (
          <>
            <p>•REACt</p>
            <p>•spotify api</p>
            <p>•tailwind</p>
            <p>•context api</p>
          </>
        ) : (
          ""
        )}
        {hover === "tesla" ? (
          <>
            <p>•REACt</p>
            <p>•redux toolkit</p>
            <p>•styled-components</p>
            <p>•css</p>
          </>
        ) : (
          ""
        )}
        {hover === "chat" ? (
          <>
            <p>•REACt</p>
            <p>•chat engine</p>
            <p>•firebase</p>
            <p>•context api</p>
          </>
        ) : (
          ""
        )}
        {hover === "employee" ? (
          <>
            <p>•REACt</p>
            <p>•Tmdb api</p>
            <p>•styled-components</p>
            <p>•Firebase</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Projects;
