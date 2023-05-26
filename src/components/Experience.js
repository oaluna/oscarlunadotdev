import React from "react";
import AltLogo from "./AltLogo";
import { EXPERIENCE_DATA } from "../data/experienceData";
import Fade from "react-reveal/Fade";

const Experience = () => {
  // 	const targets = document.querySelectorAll(".js-show-on-scroll");

  // const observer = new IntersectionObserver(callback);

  // targets.forEach(function(target) {

  //   target.classList.add("opacity-0");

  //   observer.observe(target);
  // });
  return (
    <section
      className="section transition sub-section  snap-start lg:my-[32vh]"
      id="experience"
    >
      <div className="my-32 lg:flex lg:flex-row">
        <div className="grid grid-cols-4 lg:grid-cols-12">
          <Fade right>
            <div className="bg-[#bb2649] absolute w-screen lg:left-0 h-[50vh]">
              <Fade right delay={400}>
                <div className="col-span-4 md:col-span-8 lg:col-span-12 leading-none lg:ml-5 lg:pr-28 lg:text-right">
                  <h1 className="lg:ml-[45vw] text-[10vh] lg:text-[20vh] leading-none uppercase text-slate-900">
                    Work Experience
                  </h1>
                  <h1 className="uppercase main_title leading-none text-[5vh] lg:text-[20vh] font-medium text-slate-50 pb-8">
                    My Most Recent Jobs
                  </h1>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>

        <div className="flex flex-col items-start justify-evenly w-full h-auto lg:absolute lg:left-[-10vw]">
          <Fade left>
            {EXPERIENCE_DATA.map((job) => (
              <div className="lg:w-[55vw] lg:ml-44 my-[8vh] lg:mt-0">
                <div
                  className="overflow-hidden text-center rounded  bg-zinc-200 shadow-sm shadow-slate-900/50
            h-full md:scale-[.6]  lg:scale-50 hover:scale-75 my-[-10vh] hover:transition-all hover:ease-in-out z-[0] hover:z-20"
                >
                  <figure className="p-6 pb-0">
                    {job.logo ? (
                      <>
                        <img
                          src={job.logo}
                          alt="brand"
                          className="h-24 w-24 mx-auto"
                        />
                      </>
                    ) : (
                      <>
                        <AltLogo />
                      </>
                    )}
                  </figure>

                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-medium text-slate-900 bg-blend-color-burn space-x-2">
                      {job.role}{" "}
                    </h3>
                    <p className="font-light text-slate-900 my-2">{job.time}</p>
                    <p className="text-slate-900 bg-blend-color-burn overflow-ellipsis">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Experience;
