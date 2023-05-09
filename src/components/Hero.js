import React from "react";
import taos from "taos";
import MouseIcon from "../assets/mouseIcon.png";

const HeroImg =
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png";

const Hero = () => {

	return (
  <section className="block align-baseline m-0 p-0 h-full">
    <div className="box-border">
      <div className="max-w-full ml-auto mr-auto">
			<div className="mt-[-5vh]">
				<div className="gap-0 w-full z-2 md:mx-12 flex-shrink-1">
					<div className="flex-[0 0 31vw]">
						<h1 className="text-[#bb2649] w-screen text-[21.7vw] leading-none mt-[25vh] opacity-100 translate-x-0 translate-y-0 pb-0 uppercase taos:opacity-0">Oscar Armando Luna</h1>
					</div>
					<div className="my-0 ml-12">
						<h1 className="opacity-60 text-slate-900 text-[10.6vw] leading-none uppercase">Full-Stack Developer</h1>
					</div>
					<div className="my-0 ml-12">
						<h1 className="text-slate-900 text-[10.6vw] leading-none uppercase">San Francisco, CA</h1>
					</div>
					<div className="text-center mx-auto my-16 w-12 h-12 animate-bounce">
					<a href="#about">
						<img src={MouseIcon} alt="mouse" />
						</a>
					</div>
				</div>
			</div>
			</div>
			</div>
  </section>
)};

export default Hero;
