import React from "react";
import FadeRecording from "../assets/fade-recording.mp4";

function About() {
  return (
    <section className="section" id="about">
      <div className="container px-1 lg:ml-auto md:py-0 lg:py-16 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-7"></div>
          <div className="col-span-4 md:col-span-12 lg:col-span-12 lg:ml-0">
            {" "}
            <div className="lg:w-3/5">
              <p className="sub_title text-[24px] text-slate-900">I'm a </p>
              <h1 className="main_title text-[#BB2649] md:text-[15vh] lg:text-[30vh] leading-[80%] font-regular uppercase lg:mr-0">
                Full-
              </h1>
              <br />
              <h1 className="main_title text-[#BB2649] md:text-[15vh] lg:text-[30vh] leading-[80%] w-full font-regular uppercase lg:ml-16 lg:mr-0">
                Stack developer,
              </h1>
              <br />
            </div>
            <div className="my-4 pr-12 flex-row justify-start text-left space-x-2">
              <p className="text-slate-900 md:font-semibold lg:font-medium md:text-[18px] lg:text-[24px] md:leading-2 lg:leading-9 mt-2 md:w-[80vw] md:pr-5 lg:w-3/5">
                I create and deploy web applications using HTML, CSS, and
                JavaScript. I primarily work with React.JS and Node.js to
                deliver stunning, secure, and performative web applications to
                startups in the area.
                <br />I am in the process of expanding my services to larger
                companies that need optimized e-commerce solutions delivered, as
                well as to medical software companies.
              </p>
              <button className="bg-slate-900 px-5 w-2/5 float-right py-1 ml-10 lg:mt-[-20vh] h-12  text-xl hover:animate-bounce shadow-md hover:shadow-xl rounded-br-full">
                Read More <i className="fa-solid fa-share"></i>
              </button>
              <br />
              <br />
            </div>
          </div>
          <div className="md:w-[50vh] lg:w-[45vw] lg:h-[20vh] sm:w-screen flex lg:flex-column sm:flex-row sm:relative md:absolute md:left-[60vw] sm:items-center lg:justify-start sm:ml-[-32vw] lg:ml-[-15vw] sm:mt-[60vh] md:top-[25vh] sm:pb-48 lg:top-[90vh]">
            <video autoplay="true" muted="true" loop="true" className="z-[-10]">
              <source src={FadeRecording} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
