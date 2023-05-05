import React from "react";
import FadeRecording from "../assets/fade-recording.mp4";

function About() {
  return (
    <section className="section" id="about">
      <div className="container px-1 lg:ml-auto py-22 lg:py-16 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-7">
            {/* <img
              className="w-full lg:scale-[1.5] lg:pt-[20vh] lg:pr-40"
              alt="laptop"
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1663262094/mockup-devices_mroymy.png"
            /> */}
          </div>
          <div className="col-span-4 lg:col-span-12 lg:ml-0">
            {" "}
            <div className="w-3/5">
              <h1 className="uppercase sub_title text-slate-900">I'm a </h1>
              <h1 className="main_title text-[#BB2649] text-[30vh] leading-[80%] font-regular uppercase lg:mr-0">
                Full-
              </h1>
              <br />
              <h1 className="main_title text-[#BB2649] text-[30vh] leading-[80%] w-full font-regular uppercase lg:ml-16 lg:mr-0">
                Stack developer,
              </h1>
              <br />
            </div>
            <div className="my-4 pr-12 flex-row justify-start text-left">
              <p className="text-slate-900 font-medium text-[24px] leading-9 mt-2 w-2/5">
                I create and deploy web applications using HTML, CSS, and
                JavaScript. I primarily work with React.JS and Node.js to
                deliver stunning, secure, and performative web applications to
                startups in the area.
                <br />I am in the process of expanding my services to larger
                companies that need optimized e-commerce solutions delivered, as
                well as to medical software companies.
              </p>
              <button className="bg-slate-900 px-5 w-1/5 float-right py-1 mx-0 lg:mt-[-20vh] h-12  text-xl hover:animate-bounce shadow-md hover:shadow-xl rounded-br-full">
                Read More
              </button>
              <br />
              <br />
            </div>
          </div>
          <div className="lg:w-[60vw] lg:h-[20vh] sm:w-screen flex lg:flex-column sm:flex-row sm:relative lg:absolute md:ml-0 sm:items-center lg:justify-start sm:ml-[-32vw] lg:ml-[20vw] sm:mt-96 sm:pb-48 lg:mt-[20vh]">
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
