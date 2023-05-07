import React from "react";
import PROJECT_DATA from "../data/projectData";

function Projects() {
  return (
    <>
      <section className="section snap-start" id="projects">
        <div className="container  px-1 lg:px-6 py-32 m-auto">
          <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h1 className="sub_title uppercase text-[#bb2649] lg:text-[30vh]">
                Projects
              </h1>
              <h3 className="main_title font-semibold text-slate-700 leading-8 pb-12">
                Some of the more recent things I've worked on.
              </h3>
            </div>
          </div>

          <div className="flex lg:flex-col lg:w-full lg:items-start lg:justify-evenly">
            {PROJECT_DATA.map((project) => (
              <div className="col-span-4">
                  <figure>
                    <img
                      src={project.image}
                      alt="card"
                      className="p-0 m-0 max-w-[66%] absolute right-0 flex flex-col justify-between h-auto object-cover z-[-10]"
                    />
                  </figure>

                <div className="overflow-hidden bg-[#bb2649]/50 rounded shadow-md shadow-zinc-900/20 h-full space-y-12 my-[20vh] backdrop-blur-sm">
                  <div className="p-6">
                    <header className="mb-4">
                      <h1 className="lg:text-[16vh] lg:font-medium text-slate-900 lg:mt-[0vh] w-full">
                        {project.title}
                      </h1>
                      <a href={project.repo} className="text-sm text-sky-300">
                        {" "}
                        Repo
                      </a>
                      <span> | </span>
                      <a
                        href={project.linkUrl}
                        className="text-sm text-sky-300"
                      >
                        {" "}
                        Demo
                      </a>
                    </header>
                    <p className="text-slate-900 font=bold">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
