import React from "react";
import PROJECT_DATA from "../data/projectData";

function Projects() {
  return (
    <>
      <section className="section snap-start" id="projects">
        <div className="container  px-1 lg:px-6 py-32 m-auto">
          <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h5 className="sub_title uppercase text-slate-900">Projects</h5>
              <h3 className="main_title font-semibold text-slate-700 leading-8 pb-12">
                Some of the more recent things I've worked on.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {PROJECT_DATA.map((project) => (
              <div className="col-span-4">
                <div className="overflow-hidden bg-zinc-200 rounded shadow-md shadow-zinc-900/20 h-full">
                  <figure>
                    <img src={project.image} alt="card" className="p-0 m-0" />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-900">
                        {project.title}
                      </h3>
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
                    <p className="text-slate-700">{project.description}</p>
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
