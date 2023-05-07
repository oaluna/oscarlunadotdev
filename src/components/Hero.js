import React from "react";
import taos from "taos"

const HeroImg =
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png";

const Hero = () => (
  <section className="bg-transparent flex flex-col md:flex-row justify-around items-center md:h-[80vh] lg:h-screen px-3 py-20  lg:px-10 xl:px-16">
    <div className="md:w-screen lg:w-screen flex lg:flex-row lg:items-center gap-0">
		<div className="md:w-full flex lg:flex-row lg:w-screen lg:items-center mx-0 p-0">
		<h1 className="text-4xl md:text-[14vh] lg:text-[28vh] font-medium md:leading-[1] lg:leading-none lg:mt-[65vh] md:pb-96 md:ml-32 lg:ml-32 uppercase text-[#bb2649] lg:flex-wrap z-10 lg:w-full taos:duration-[1.2s] taos:translate-x-[200px] taos:opacity-0" data-taos-offset="500">
        Oscar Armando Luna
      </h1>
			</div>
			<div className="flex flex-col lg:w-1/5 gap-0 md:mr-32 lg:mr-96 md:mt-52 lg:pb-0 lg:p-0">
      <h1 className="uppercase md:text-[5vh] lg:text-[10vh] text-slate-900/60 leading-none m-0  lg:pr-0  lg:mr-0  lg:w-full flex-row no-wrap">
        Full-Stack Developer
      </h1>
      <h1 className="uppercase md:text-[5vh] lg:text-[10vh] text-slate-900 leading-none m-0">
				San Francisco, CA
			</h1>
      <button className="bg-slate-900 text-white font-bold rounded-br-full py-3 px-8 w-96">
        Get Started <i className="fa-solid fa-share"></i>
      </button>
			</div>
    </div>
    <div className="md:w-3/5 lg:w-2/5 object-cover z-[-10] absolute md:right-0 lg:right-24 md:top-[0vh] lg:top-[-12vh] overflow-y-hidden">
      <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
    </div>
  </section>
);

export default Hero;
