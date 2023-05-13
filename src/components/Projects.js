import React from "react";
import CarouselComponent from "./Carousel";





function Projects() {

  return (
    <>
      <section className="section snap-start relative" id="projects">
        <div className="container w-full mt-[-40vh] py-36 mx-auto">
          <div className="flex flex-row items-center float-right absolute top-0 left-0 px-16 z-10">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h1 className="sub_title uppercase text-[#bb2649] lg:text-[30vh]">
                Projects
              </h1>
              <p className="main_title font-thin text-slate-900 leading-8 pb-12 text-[16px]">
                Some of the more recent things I've worked on.
              </p>
            </div>
          </div>
				
<CarouselComponent/>
        
        </div>
      </section>
    </>
  );
}

export default Projects;
