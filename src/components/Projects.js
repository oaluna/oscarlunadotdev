import React from "react";
import CarouselComponent from "./Carousel";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <>
      <section
        className="section transition sub-section  snap-start relative w-screen h-auto lg:flex lg:flex-row lg:items-center lg:my-36 lg:h-[100vh]"
        id="projects"
      >
        <div className="container w-full md:mt-0 px-0 mx-auto">
          <div className="flex flex-row items-center md:text-left lg:float-right relative lg:absolute lg:top-56 lg:left-40 md:px-0 px-16 z-20 leading-none">
            <Fade right delay={500}>
              <div className="col-span-4 md:col-span-8 lg:col-span-12 my-12 lg:mt-64 lg:ml-12">
                <h1 className="uppercase text-[#bb2649] text-[10vh] lg:text-[20vh] leading-none">
                  Recent Projects
                </h1>
                <p className="main_title font-thin text-slate-900 leading-8 pb-12 text-[16px]">
                  Some of the more recent things I've worked on.
                </p>
              </div>
            </Fade>
          </div>
          <Fade left>
            <CarouselComponent />
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Projects;
