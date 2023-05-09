import React from "react";
import mongoDBIcon from "../assets/mongodb.png";

function Stack() {
  return (
    <>
      <section className="section snap-start h-[100vh]">
        <div className="container  px-1 lg:px-6 pb-32 mx-auto lg:mt-[70vh]">
          <h1 className="my-24 text-sm font-thin text-slate-700 lg:text-[15vh] uppercase">
            The web technologies I work with:
          </h1>
          <div className="inline-flex flex-row md:space-x-4 lg:space-x-1 lg:space-y-9 md:w-[70vw] lg:w-1/4 lg:flex-wrap md:no-wrap items-center lg:float-right lg:mt-[-30vh] justify-between mx-auto">
            <div className="md:col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-orange-500/25 hover:shadow-orange-500/50 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-html5 fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-blue-900/25 hover:shadow-blue-900/50 bg-gradient-to-tr from-blue-900 to-blue-700 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-css3 fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              {" "}
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/50 bg-gradient-to-tr from-cyan-600 to-cyan-300 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-react fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              {" "}
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-pink-600/25 hover:shadow-pink-600/50 bg-gradient-to-tr from-pink-600 to-pink-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-sass fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-green-600/25 hover:shadow-green-600/50 bg-gradient-to-tr from-green-600 to-green-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-node-js fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-yellow-600/25 hover:shadow-yellow-600/50 bg-gradient-to-tr from-yellow-600 to-yellow-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-js fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-red-600/25 hover:shadow-red-600/50 bg-gradient-to-tr from-red-600 to-red-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                <i className="stack-icon fa-brands fa-npm fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-black/25 hover:shadow-black/50 bg-gradient-to-tr from-black to-gray-900 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                <i className="stack-icon fa-brands fa-github fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
              <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md hover:shadow-xl shadow-green-800/25 hover:shadow-green-800/50 bg-gradient-to-tr from-green-800 to-green-500 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                <img src={mongoDBIcon} alt="mongoDB" className="m-0 p-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="services" className="services_area pt-120 pb-120">
        <div className="container snap-always snap-start">
          <div className="flex flex-row flex-wrap">
            <div className="services_content mt-5 xl:mt-10">
              <div className="text-zinc-100 w-full md:w-1/2 lg:w-screen flex flex-wrap lg:justify-evenly gap-8 md:gap-4 lg:gap-1 mx-auto md:lg:mr-64 xl:mr-48 my-24">
                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-orange-500 to-orange-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-html5 fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-blue-900 to-blue-700 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-css3 fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-cyan-600 to-cyan-300 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-react fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-pink-600 to-pink-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-sass fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-green-600 to-green-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-node-js fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-yellow-600 to-yellow-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                  <i className="stack-icon fa-brands fa-js fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>

                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-red-600 to-red-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                  <i className="stack-icon fa-brands fa-npm fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>
                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-black to-gray-900 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                  <i className="stack-icon fa-brands fa-github fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>
                <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-rose-600 to-rose-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                  <i className="stack-icon fa-brands fa-dribbble fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex flex-wrap justify-center mt-8 mx-1 gap-4 text-white">
            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-orange-500 to-orange-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-html5 fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-blue-900 to-blue-700 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-css3 fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-cyan-600 to-cyan-300 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-react fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-pink-600 to-pink-400 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-sass fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-green-600 to-green-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-node-js fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-yellow-600 to-yellow-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-js fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>

            <div className="w-16 h-16 lg:h-24 lg:w-24 shadow-md bg-gradient-to-tr from-red-600 to-red-400 sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 flex items-center justify-center">
              <i className="stack-icon fa-brands fa-npm fa-3x lg:fa-4x m-0 fa-inverse" style={{color:"white"}}></i>
            </div>
          </div>
        </div>
      </section>
      <div
        className="
      z-[-1] 
      absolute 
      h-auto w-[600vw] md:w-full lg:w-[100vw]
      
      left-[-80vw] md:left-0 lg:left-[-22vw]
      top-[815vh] md:top-[475vh] lg:top-[-10vh]
      overflow-hidden 
      object-cover 
      p-0 
      
      brightness-[55%]"
      >
        
      </div>  */}
    </>
  );
}

export default Stack;
