import React from "react";
import DotsGrid from "./DotsGrid";
const Hero = () => (
  <>
    <DotsGrid />
    <section className="section snap-start" id="home">
      <div className="container px-1 lg:px-6 md:pt-0 md:pb-32 lg:pb-32 m-auto z-0 min-h-screen">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-0 md:grid-cols-10 md:items-center lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-7 p-0 md:p-8 lg:pl-24 z-[-1]">
            {" "}
            <h1 className="text-7xl lg:text-6xl font-extrabold tracking-tighter leading-none text-slate-900">
              Oscar Armando Luna
            </h1>
            <h4 className="z-0 mt-8 lg:mr-8 font-bold leading-none text-slate-900">
              Full-Stack Developer
              <br />
              San Francisco, CA
            </h4>
            <div className="hero_btn mt-10">
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
              className="rounded-96 bg-gradient-to-tr from-slate-900 to-slate-500 rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
