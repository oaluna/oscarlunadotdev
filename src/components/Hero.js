import React from "react";

const Hero = () => (
  
    <section className="section snap-start" id="home">
      <div className="container px-1 lg:px-3 md:pt-0 md:pb-32 lg:pb-32 m-auto z-0 min-h-screen">
        <div className="flex flex-row flex-wrap gap-0  justify-center lg:grid-cols-12 lg:mt-1/2 sm:mt-48 lg:mt-64 lg:mb-0">
          <div className="col-span-12 md:col-span-6 lg:col-span-12 p-0 z-[-1] flex-[31vw]">
            {" "}
            <h1 className="text-[31vh] font-medium uppercase tracking-[-8px] leading-none text-[#BB2649] transform relative">
              Oscar Armando Luna
            </h1>
            <h1 className="flex flex-row float-right uppercase z-0 sm:mt-[-29vh] lg:mt-[-29vh] mr-1 text-[14vh] font-bold leading-none text-slate-900/60">
              Full-Stack Developer
							</h1>
              <br />
							<h1 className="flex flex-row float-right uppercase z-0 mt-[-18vh] mr-24 text-[14vh] font-bold leading-none text-slate-900">
              San Francisco, CA
            </h1>
            <div className="hero_btn mt-44 flex flex-row justify-center items-end">
              <a href="#contact">
                {" "}
                <button className="hover:animate-bounce uppercase shadow-md shadow-zinc-900/30 flex items-center justify-center h-12 px-12 text-sm font-bold tracking-wide text-white  transition duration-300 rounded whitespace-nowrap bg-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:shadow-none  my-8 rounded-br-full w-full">
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
              className="absolute top-0 sm:left-1/4 sm:top-1/5 lg:left-1/2 h-full z-[-10]"
            />
          </div>
        </div>
      </div>
    </section>
);

export default Hero;
