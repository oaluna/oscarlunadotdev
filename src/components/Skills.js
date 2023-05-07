import React from "react";
import SKILLS_DATA from "../data/skillsData";

function Skills() {
  return (
    <section className="section snap-start" id="skills">
      <div className="container  px-1 lg:px-6 pt-32 pb-12 m-auto">
        <div className="grid sm:grid-cols-12 md:grid-cols-8 lg:grid-cols-6">
          <div className="col-span-3 md:col-span-4 lg:col-span-6">
            <h1 className="sub_title md:text-[15vh] lg:text-[30vh] uppercase text-slate-900">Skills</h1>
            <p className="main_title font-normal lg:w-1/3 float-right  md:text-[18px] lg:text-[24px] lg:mr-[34vw] md:mt-[-15vh] lg:mt-[-35vh] text-slate-900 leading-[1.5] pb-20">  
            I'm a full-stack developer with expertise in building and
              deploying responsive and stunning MERN web applications. This
              means that my skills include:
							</p>
          </div>
        </div>

        <div className="w-1/2 border-box direction-ltr grid grid-cols-3 grid-rows-3 float-right mx-0 px-0 lg:mt-[-48vh] lg:mr-[-5vw]">
          {SKILLS_DATA.map((skill) => (
            <div className="transform-all duration-[0.3s] ease-in flex-[0 0 calc(33.33% - 1vw)]
    mb-1 rounded-tr-[3rem] m-2 space-x-2 space-y-2 rounded-none bg-[#bb2649]/10 transform transition-all duration-[0.3s] hover:bg-[#bb2649]">

              <div className="h-56 w-56 mx-auto overflow-hidden text-center bg-transparent text-slate-500  hover:text-slate-50">
                <figure className="p-6 pb-0">
                  <lottie-player
                    src={skill.icon}
                    loop="true"
                    autoplay="true"
                    muted="true"
                  ></lottie-player>
                </figure>

              </div>
                <div className="px-6 pb-0">
                  <h3 className="text-lg font-medium leading-none py-2 text-slate-900 text-center ">
                    {skill.name}
                  </h3>
                  
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
