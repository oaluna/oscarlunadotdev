import React from "react";
import DotsGrid from "./DotsGrid";
const Hero = () => (
  
    <section className="section snap-start" id="home">
      <div className="container px-1 lg:px-3 md:pt-0 md:pb-32 lg:pb-32 m-auto z-0 min-h-screen">
        <div className="flex flex-row flex-wrap gap-0  justify-center lg:grid-cols-12 mt-64">
          <div className="col-span-12 md:col-span-6 lg:col-span-12 p-0 z-[-1] flex-[31vw]">
            {" "}
            <h1 className="text-[31vh] font-normal uppercase tracking-[-8px] leading-none text-[#BB2649] transform relative">
              Oscar Armando Luna
            </h1>
            <h1 className="flex flex-row float-right uppercase z-0 mt-8 lg:mt-[-29vh] mr-8 lg:mr-0 text-[14vh] font-bold leading-none text-slate-900">
              Full-Stack Developer
              <br />
              San Francisco, CA
            </h1>
            <div className="hero_btn mt-44 flex flex-row justify-center items-end">
              <a href="#contact">
                {" "}
                <button className="uppercase shadow-md shadow-zinc-900/30 inline-flex items-center justify-center h-12 px-12 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300  disabled:shadow-none z-10 my-12">
                  <span>Get Started</span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 p-0 m-0 md:mx-auto">
            {" "}
            <img
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png"
              alt="hero"
              className="absolute top-0 left-1/2 h-full z-[-10]"
            />
          </div>
        </div>
      </div>
    </section>
);

export default Hero;
