import React from "react";
import CarouselComponent from "./Carousel";
import Fade from "react-reveal/Fade";

function Projects() {

  return (
    <>
      <section className="section snap-start relative w-screen h-full" id="projects">
        <div className="container w-full lg:mt-[-40vh] lg:py-36 px-0 mx-auto">
          <div className="flex flex-row items-center lg:float-right vrelative lg:absolute lg:top-56 lg:left-40 px-16 z-20">
					<Fade right delay={500}>
            <div className="col-span-4 md:col-span-8 lg:col-span-12 my-12 lg:my-0">
              <h1 className="sub_title uppercase text-[#bb2649] text-[10vh] lg:text-[20vh] leading-none">
                Recent Projects
              </h1>
              <p className="main_title font-thin text-slate-900 leading-8 pb-12 text-[16px]">
                Some of the more recent things I've worked on.
              </p>
            </div>
						</Fade>
          </div>
				<Fade left>
<CarouselComponent/>
</Fade>
        </div>
      </section>
    </>
  );
}

export default Projects;
