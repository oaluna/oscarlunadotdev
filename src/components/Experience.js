import React from "react";
import AltLogo from "./AltLogo";
import { EXPERIENCE_DATA } from "../data/experienceData";

const Experience = () => (
  <section className="section snap-start" id="experience">
    <div className="container  px-1 px-6 py-32 m-auto">
      <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <h5 className="sub_title uppercase text-slate-900">
            Work Experience
          </h5>
          <h3 className="main_title font-semibold text-slate-700 leading-8 pb-12">
            My Most Recent Jobs
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        {EXPERIENCE_DATA.map((job) => (
          <div className="col-span-4">
            <div
              className="overflow-hidden text-center rounded  bg-zinc-200 shadow-sm shadow-slate-900/50
            h-full"
            >
              {/*  <!-- Icon --> */}
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
              {/*  <!-- Body--> */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-medium text-blue-900 bg-blend-color-burn space-x-2">
                  {job.role}{" "} 
                </h3>
								<p className="font-light text-blue-900 my-2">{job.time}</p>
                <p className="text-blue-700 bg-blend-color-burn">
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
