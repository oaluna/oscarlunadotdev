import React from "react";
import SKILLS_DATA from "../data/skillsData";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <section
      className="section transition sub-section  snap-start relative"
      id="skills"
      data-scroll-section
    >
      <div className="container  px-1 lg:px-6 md:py-0 lg:py-[65vh] m-auto ">
        <div className="grid sm:grid-cols-12 md:grid-cols-8 lg:grid-cols-6">
          <Fade down>
            <div className="col-span-3 md:col-span-4 lg:col-span-6">
              <h1 className="sub_title text-[10vh] md:text-[15vh] lg:text-[20vh] uppercase text-[#bb2649]">
                Skills
              </h1>
              <p className="main_title font-normal lg:w-1/4 float-right text-[12px]  md:text-[18px] lg:text-[24px] lg:mr-[45vw] md:mt-[-8vh] lg:mt-[-30vh] text-slate-900 leading-none py-20">
                I'm a full-stack developer with expertise in building and
                deploying responsive and stunning MERN web applications. This
                means that my skills include:
              </p>
            </div>
          </Fade>
        </div>

        <div className="w-full md:w-3/5 lg:w-1/2 border-box direction-ltr flex flex-row flex-wrap md:float-right md:mt-[-32vh] lg:mt-[-48vh] md:mr-[-10vw] lg:ml-24 m-0 p-0">
          {SKILLS_DATA.map((skill) => (
            <Fade up cascade>
						<Link to="/skill">
              <div
                key={skill.id}
                className="bg-[#bb2649] w-full md:w-48 md:h-52 lg:w-56 h-42 m-2 px-3 p-8 rounded-tr-[25%] shadow-md hover:shadow-xl"
              >
                <div className="">
                  <figure className="w-24 h-24 mx-auto">
                    <lottie-player
                      src={skill.icon}
                      loop={true}
                      autoPlay={true}
                      muted={true}
                    ></lottie-player>
                  </figure>
                </div>
                <div className="px-6 pb-0">
                  <h3 className="text-lg font-medium leading-none py-2 text-slate-900 text-center ">
                    {skill.name}
                  </h3>
                </div>
              </div>
							</Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
