import React from "react";
import AltLogo from "./AltLogo";
import { EXPERIENCE_DATA } from "../data/experienceData";

const Experience = () => (
  <section className="section snap-start" id="experience">
    <div className="my-32">
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <h1 className="text-[10vh] leading-none uppercase text-slate-900">
            Work Experience
          </h1>
          <h1 className="uppercase main_title md:text-[11.75vh] lg:text-[23.5vh] text-right font-medium text-[#bb2649] leading-8 pb-12">
            My Most Recent Jobs
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly w-[100%] h-full">
        {EXPERIENCE_DATA.map((job) => (
          <div className="col-span-4 mx-auto my-[7vh]">
            <div
              className="overflow-hidden text-center rounded  bg-zinc-200 shadow-sm shadow-slate-900/50
            h-full md:scale-60  lg:scale-50 hover:scale-100 my-[-5vh] hover:transition-all hover:ease-in-out z-[-10] hover:z-10"
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
      </div>
    </div>
  </section>
);

export default Experience;
