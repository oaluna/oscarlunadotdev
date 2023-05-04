import React from "react";
import FadeRecording from "../assets/fade-recording.mp4";

function About() {
  return (
    <section className="section" id="about">
      <div className="container px-1 lg:px-6 py-22 lg:py-32 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-7">
            <img
              className="w-full"
              alt="laptop"
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1663262094/mockup-devices_mroymy.png"
            />
          </div>
          <div className="col-span-4 lg:col-span-5">
            {" "}
            <h5 className="sub_title text-slate-900">
              Hello! I'm{" "}
            </h5>
            <h1 className="main_title text-[#BB2649] text-6xl font-regular uppercase">
              Oscar Luna
            </h1>
            <p className="text-slate-900 font-medium">
              I create and deploy web applications using HTML, CSS, and
              JavaScript. I primarily work with React.JS and Node.js to deliver
              stunning, secure, and performative web applications to startups in
              the area.
              <br />I am in the process of expanding my services to larger
              companies that need optimized e-commerce solutions delivered.
            </p>
          </div>
          <div className="w-[30vw] h-[30vh] flex flex-column items-end ml-[45vw] mt-[-45vh]">
            <video autoplay="true" muted="true" loop="true">
              <source
                
                src={FadeRecording}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
