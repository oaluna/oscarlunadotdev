import React from "react";
function About() {
  return (
    <section>
      <div className="container px-1 lg:px-6 py-24 lg:py-32 m-auto">
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
            <h5 className="sub_title font-semibold text-slate-900">
              Hello! I'm{" "}
            </h5>
            <h4 className="main_title bg-clip-text text-transparent bg-gradient-to-tr from-orange-400 to-red-500 via-indigo-600 text-5xl font-extrabold">
              Oscar Luna
            </h4>
            <p className="text-slate-900 font-semibold">
              I create and deploy web applications using HTML, CSS, and
              JavaScript. I primarily work with React.JS and Node.js to deliver
              stunning, secure, and performative web applications to startups in
              the area.
              <br />I am in the process of expanding my services to larger
              companies that need optimized e-commerce solutions delivered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
