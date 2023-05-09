import React from "react";
import {
  Carousel,
  initTE,
} from "tw-elements";




function Projects() {

	React.useEffect(() => {
		initTE({ Carousel });
	}, [])
  return (
    <>
      <section className="section snap-start" id="projects">
        <div className="container  px-1 lg:px-6 py-32 m-auto">
          <div className="flex flex-row items-center float-right absolute top-[650vh] left-[60%] z-10">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h1 className="sub_title uppercase text-[#bb2649] lg:text-[30vh]">
                Projects
              </h1>
              <h3 className="main_title font-semibold text-slate-700 leading-8 pb-12">
                Some of the more recent things I've worked on.
              </h3>
            </div>
          </div>
					<div
  id="carouselExampleCaptions"
  className="relative pb-[50vh]"
  data-te-carousel-init
  data-te-carousel-slide>
  {/* <!--Carousel indicators--> */}
  <div
    className="absolute bottom-0 left-auto right-auto z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="3"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 4"></button>
  </div>

  {/* <!--Carousel items--> */}
  <div
    className="relative w-3/4 overflow-hidden after:clear-both after:block after:content-[''] ml-[-5vw] mt-[-50vh]">
    {/* <!--First item--> */}
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <img
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674239052/fade-bg_zhy4f3.png"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-white md:block bg-gradient-to-tr from-[#bb2649]/20 to-[#bb2649]/25 backdrop-blur-sm">
        <h1 className="text-[5vh] text-[#bb2649]">Fade - Bay Area Carpooling</h1>
        <p className="text-white font-bold">
          A pet project of mine that provides a means for bay area workers to help each other get to work on time by organizing regular carpooling via itinerary matching.
        </p>
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{backfaceVisibility:"hidden"}}>
      <img
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662574472/29915692-c2441a79aa89b9ed0f6be9da1c0b491c_e6ltqj.png"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-white md:block bg-gradient-to-tr from-[#bb2649]/20 to-[#bb2649]/25 backdrop-blur-sm">
        <h1 className="text-[5vh] text-[#bb2649]">Glowing Flowers | Plants & Gifts</h1>
        <p className="text-white font-bold">
				An e-commerce web application for a local business. Users can store desired items in a cart that can be accessed at a future session thanks to the use of Redux Persist.
        </p>
      </div>
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <img
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1664340809/Web_capture_27-9-2022_215232_zz981e.csb.app_kcjspz.jpg"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-white md:block bg-gradient-to-tr from-[#bb2649]/20 to-[#bb2649]/25 backdrop-blur-sm">
        <h1 className="text-[5vh] text-[#bb2649]">Landing Page Template - For sale on GumRoad.io</h1>
        <p className="text-white font-bold">
				A landing page that uses tailwindcss and ReactJS to provide other developers with a template that will save them hours of researching web designs for their clients.
        </p>
      </div>
    </div>
  </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      style={{backfaceVisibility: "hidden"}}>
      <img
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817991/oscarlunadotdev/globoMantics.png"
        className="block w-full"
        alt="..." />
      <div
        className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-white md:block bg-gradient-to-tr from-[#bb2649]/20 to-[#bb2649]/25 backdrop-blur-sm">
        <h1 className="text-[5vh] text-[#bb2649]">Globomantics - Real Estate App</h1>
        <p className="text-white font-bold">
				A landing page for a real-estate company where users can search listings as well as filter search results by price range and by location.
        </p>
      </div>
    </div>


  {/* <!--Carousel controls - prev item--> */}
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  {/* <!--Carousel controls - next item--> */}
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>


          {/* <div className="flex lg:flex-col lg:w-full lg:items-start lg:justify-evenly">
            {PROJECT_DATA.map((project) => (
              <div className="col-span-4">
                  <figure key={project.id}>
                    <img
                      src={project.image}
                      alt="card"
                      className="p-0 m-0 max-w-[66%] absolute right-0 flex flex-col justify-between h-auto object-cover z-[-10]"
                    />
                  </figure>

                <div className="overflow-hidden bg-[#bb2649]/50 rounded shadow-md shadow-zinc-900/20 h-full space-y-12 my-[20vh] backdrop-blur-sm">
                  <div className="p-6">
                    <header className="mb-4">
                      <h1 className="lg:text-[16vh] lg:font-medium text-slate-900 lg:mt-[0vh] w-full">
                        {project.title}
                      </h1>
                      <a href={project.repo} className="text-sm text-sky-300">
                        {" "}
                        Repo
                      </a>
                      <span> | </span>
                      <a
                        href={project.linkUrl}
                        className="text-sm text-sky-300"
                      >
                        {" "}
                        Demo
                      </a>
                    </header>
                    <p className="text-white font=bold">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
