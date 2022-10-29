import React from "react";
import SKILLS_DATA from "../data/skillsData";

function Skills() {
  return (
    <section className="section snap-start" id="skills">
      <div className="container  px-1 lg:px-6 pt-32 pb-12 m-auto">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h5 className="sub_title uppercase text-slate-700">Skills</h5>
            <h3 className="main_title font-semibold text-slate-900 leading-8 pb-20">
              I'm a full-stack developer with expertise in building and
              deploying responsive and stunning MERN web applications. This
              means that my skills include:
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {SKILLS_DATA.map((skill) => (
            <div className="col-span-4 lg:col-span-3">

              <div className="h-full overflow-hidden text-center bg-transparent text-slate-500">
                <figure className="p-6 pb-0">
                  <lottie-player
                    src={skill.icon}
                    loop="true"
                    autoplay="true"
                    muted="true"
                  ></lottie-player>
                </figure>

                <div className="p-6 pb-0">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    {skill.name}
                  </h3>
                  <p className="mb-4 text-sm text-left font-medium text-slate-700">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
