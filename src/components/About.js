import React from "react";
import FadeRecording from "../assets/fade-recording.mp4";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <section className="w-screen lg:px-[3vw] mt-32 transition sub-section" id="about">
      <div className="flex no-wrap">
        <div className="pt-[3rem]">
          <Fade up>
            <div className="flex items-center w-full lg:w-3/5 lg:ml-[30vw] z-[-20]">
              <video
                autoPlay={true}
                muted={true}
                loop={true}
                className="h-auto p-12"
                style={{ clipPath: "inset(10% 0 10% 0)" }}
              >
                <source src={FadeRecording} type="video/mp4" />
              </video>
            </div>
          </Fade>
          <Fade left>
            <div className="md:mt-[-20vh] lg:mt-[-26vh] z-[10] relative ml-12 lg:pl-36 pr-24">
              <div className="m-0">
                <p className="font-medium text-[24px] text-slate-900">I'm a</p>
              </div>
              <div className="m-0 space-y-12">
                <h1 className="text-[#bb2649] uppercase text-[10vh] lg:text-[20vh] leading-none">
                  Full-Stack Developer
                </h1>
                <p className="text-slate-900 text-[12px] lg:text-[24px]">
                  {" "}
                  I create and deploy web applications using HTML, CSS, and
                  JavaScript. I primarily work with React.JS and Node.js to
                  deliver stunning, secure, and performative web applications to
                  startups in the area.
                  <br />I am in the process of expanding my services to larger
                  companies that would like to get their online business
                  started, as well as to medical software companies that are in
                  need of a developer with experience in meeting HIPAA
                  guidelines when building their web application.
                </p>
              </div>
              <div>
                <button className="bg-slate-900 w-2/3 text-slate-50 mt-5 p-5 font-bold rounded-br-full shadow-sm hover:shadow-xl hover:animate-bounce">
                  Learn More <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
