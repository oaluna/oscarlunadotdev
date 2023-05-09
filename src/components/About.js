import React from "react";
import FadeRecording from "../assets/fade-recording.mp4";

function About() {
  return (
    <section className="w-full px-[3vw] py-[8vh] mt-32" id="about">
      <div className="flex no-wrap">
        <div className="pt-[1.5rem]">
          <div className="flex items-center justify-center">
            <video autoplay="true" muted="true" loop="true" className="z-[-10]">
              <source src={FadeRecording} type="video/mp4" />
            </video>
          </div>
          <div className="mt-[-13vh]">
            <div className="m-0">
              <p className="font-medium text-[2vh] text-slate-900">I'm a</p>
            </div>
            <div className="m-0">
              <h1 className="text-[#bb2649] uppercase text-[10vh] leading-none">
                Full-Stack Developer
              </h1>
							<p className="text-slate-900">    I create and deploy web applications using HTML, CSS, and
                JavaScript. I primarily work with React.JS and Node.js to
                deliver stunning, secure, and performative web applications to
                startups in the area.
                <br />I am in the process of expanding my services to larger
                companies that would like to get their online business started, as
                well as to medical software companies that are in need of a developer with experience in meeting HIPAA guidelines when building their web application.
</p>
            </div>
						<div>
							<button className="bg-slate-900 w-2/3 text-slate-50 p-5 font-bold rounded-br-full">Learn More <i className="fa-solid fa-arrow-right"/></button>
						</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
