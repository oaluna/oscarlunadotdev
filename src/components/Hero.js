import React from "react";

const HeroImg =
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png";

const Hero = () => (
  // <section className="section snap-start" id="home">
  //   <div className="container px-1 lg:px-3 md:pt-0 md:pb-32 lg:pb-32 m-auto z-0 min-h-screen">
  //     <div className="flex flex-row flex-wrap gap-0  justify-center lg:grid-cols-12 lg:mt-1/2 sm:mt-48 lg:mt-64 lg:mb-0">
  //       <div className="col-span-12 md:col-span-6 lg:col-span-12 p-0 z-[-1] flex-[31vw]">
  //         {" "}
  //         <h1 className="text-[31vh] font-medium uppercase tracking-[-8px] leading-none text-[#BB2649] transform relative">
  //           Oscar Armando Luna
  //         </h1>
  //         <h1 className="flex flex-row float-right uppercase z-0 sm:mt-[-29vh] lg:mt-[-29vh] mr-1 text-[14vh] font-bold leading-none text-slate-900/60">
  //           Full-Stack Developer
  // 					</h1>
  //           <br />
  // 					<h1 className="flex flex-row float-right uppercase z-0 mt-[-18vh] mr-24 text-[14vh] font-bold leading-none text-slate-900">
  //           San Francisco, CA
  //         </h1>
  //         <div className="hero_btn mt-44 flex flex-row justify-center items-end">
  //           <a href="#contact">
  //             {" "}
  //             <button className="hover:animate-bounce uppercase shadow-md shadow-zinc-900/30 flex items-center justify-center h-12 px-12 text-sm font-bold tracking-wide text-white  transition duration-300 rounded whitespace-nowrap bg-slate-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:shadow-none  my-8 rounded-br-full w-full">
  //               <span>Get Started</span>
  //             </button>
  //           </a>
  //         </div>
  //       </div>
  //       <div className="col-span-4 md:col-span-3 p-0 m-0 md:mx-auto">
  //         {" "}
  //         <img
  //           src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png"
  //           alt="hero"
  //           className="absolute top-0 sm:left-1/4 sm:top-1/5 lg:left-1/2 h-full z-[-10]"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </section>
  <section className="bg-transparent flex flex-col md:flex-row justify-around items-center h-screen px-3 py-20 lg:px-10 xl:px-16">
    <div className="md:w-screen flex flex-row items-center gap-0">
		<div className="max-w-screen mx-0 p-0">
      <h1 className="text-4xl md:text-6xl lg:text-[28vh] font-medium leading-tight mb-6 ml-32 uppercase text-[#bb2649] w-full z-10">
        Oscar Armando Luna
      </h1>
			</div>
			<div className="flex flex-col w-2/5 gap-0 ml-32 pb-5 p-0">
      <h1 className="uppercase text-[10vh] text-slate-900/60 leading-none m-0">
        Full-Stack Developer
      </h1>
      <h1 className="uppercase text-[10vh] text-slate-900 leading-none m-0">
				San Francisco, CA
			</h1>
      <button className="bg-slate-900 text-white font-bold rounded-br-full py-3 px-8 w-96">
        Get Started
      </button>
			</div>
    </div>
    <div className="md:w-2/5 object-cover z-[-10] absolute right-24 top-[-12vh] overflow-y-hidden">
      <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
    </div>
  </section>
);

export default Hero;
