import React from "react";
import taos from "taos";
import MouseIcon from "../assets/mouseIcon.png";
import Fade from "react-reveal/Fade";

const HeroImg =
  "https://res.cloudinary.com/dgdnpkfun/image/upload/v1666561255/removal.ai__tmp-6355b4b13902e_D8T3I5_chyzwv.png";

const Hero = () => {
  return (
    <section className="block align-baseline m-0 p-0 h-full">
      <div className="box-border">
        <div className="max-w-full ml-auto mr-auto">
          <div className="mt-0 lg:mt-24 ml-0">
            <div className="gap-0 w-full z-2 md:mx-12 flex-shrink-1 lg:flex lg:flex-row">
              <Fade left delay={0}>
                <div className="flex-[0 0 31vw] flex-row mt-56 lg:ml-36">
                  <h1 className="hero text-[#bb2649] text-[10vh] lg:text-[23vh] leading-none uppercase">
                    Oscar Armando Luna
                  </h1>
                </div>
              </Fade>
                <div className="my-0 lg:mt-60 lg:ml-2">
              <Fade right delay={0}>
                  <h1 className="hero opacity-60 text-slate-900 text-[5vh] lg:text-[10vh] leading-none uppercase">
                    Full-Stack Developer
                  </h1>
                  <h1 className="hero text-slate-900 text-[5vh] lg:text-[10vh] leading-none uppercase">
                    San Francisco, CA
                  </h1>
              </Fade>
                </div>
              <Fade up delay={800}>
                <div className="w-full lg:w-2/5 z-[-20] scale-75  h-full absolute left-auto lg:right-36 hidden md:flex lg:top-0">
                  <img src={HeroImg} alt="me" className="heroImage" />
                </div>
              </Fade>
            </div>
            <a href="#about">
              <img
                src={MouseIcon}
                alt="mouse"
                className="w-16 h-16 mx-auto mt-36 mb-0 animate-bounce"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
