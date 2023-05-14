import React from "react";
import mongoDBIcon from "../assets/mongodb.png";
import Fade from "react-reveal/Fade";

function Stack() {
  return (
    <>
      <section className="section snap-start w-full h-[100vh] relative my-[24vh]">
			<Fade right>
        <div className="container px-1 mx-auto">
          <h1 className="my-24 lg:text-[15vh] text-[10vh] font-thin text-slate-700 leading-none">
            The web technologies I work with:
          </h1>
          <div className="float-right flex flex-row flex-wrap justify-evenly w-auto lg:w-3/4 text-center">

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-orange-500/25 hover:shadow-orange-500/50 bg-gradient-to-tr from-orange-500 to-orange-400 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-html5 fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-blue-900/25 hover:shadow-blue-900/50 bg-gradient-to-tr from-blue-900 to-blue-700 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-css3 fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              {" "}
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-cyan-600/25 hover:shadow-cyan-600/50 bg-gradient-to-tr from-cyan-600 to-cyan-300 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-react fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              {" "}
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-pink-600/25 hover:shadow-pink-600/50 bg-gradient-to-tr from-pink-600 to-pink-400 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-sass fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-green-600/25 hover:shadow-green-600/50 bg-gradient-to-tr from-green-600 to-green-400 sm:translate-x-12 md:translate-x-0 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-node-js fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-yellow-600/25 hover:shadow-yellow-600/50 bg-gradient-to-tr from-yellow-600 to-yellow-400 sm:translate-x-12 md:translate-x-0 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap  items-center justify-center">
                <i className="stack-icon fa-brands fa-js fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-red-600/25 hover:shadow-red-600/50 bg-gradient-to-tr from-red-600 to-red-400 sm:translate-x-12 md:translate-x-0 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                <i className="stack-icon fa-brands fa-npm fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-black/25 hover:shadow-black/50 bg-gradient-to-tr from-black to-gray-900 sm:translate-x-12 md:translate-x-0 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flrap items-center justify-center">
                <i className="stack-icon fa-brands fa-github fa-3x lg:fa-4x m-0 fa-inverse"></i>
              </div>
            </div>

            <div className="col-span-4 m-4 lg:m-12">
              <div className="w-16 h-16 lg:h-32 lg:w-32 shadow-md hover:shadow-xl shadow-green-800/25 hover:shadow-green-800/50 bg-gradient-to-tr from-green-800 to-green-500 sm:translate-x-12 md:translate-x-0 rounded-full hover:scale-125 hover:animate-bounce transition-all ease-out cursor-pointer duration-200 flex flex-col flex-wrap items-center justify-center">
                <img src={mongoDBIcon} alt="mongoDB" className="m-0 p-6" />
              </div>
            </div>
          </div>
        </div>

				</Fade>
      </section>
    </>
  );
}

export default Stack;
