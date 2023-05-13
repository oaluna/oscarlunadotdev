import React from "react";
import { Carousel, initTE } from "tw-elements";

const CarouselComponent = () => {
  React.useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <div className="carousel">
      <div
        id="carouselExampleCaptions"
        className="absolute w-full p-0 mx-0 object-cover"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!--Carousel indicators--> */}
        <div
          className="absolute lg:left-96 lg:bottom-0 mx-auto w-full inline-flex list-none justify-center items-center"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[10px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#bb2649] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[10px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#bb2649] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[10px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#bb2649] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to="3"
            className="mx-[3px] box-content h-[10px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#bb2649] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* <!--Carousel items--> */}
        <div className="relative lg:w-[40vw] ml-0 lg:ml-[40vw] lg:mt-[10vh] lg:mb-[5vh] overflow-hidden after:clear-both after:block after:content-[''] ">
          {/* <!--First item--> */}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1674239052/fade-bg_zhy4f3.png"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-slate-50 md:block bg-gradient-to-tr from-slate-500 to-gray-500 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
              <h1 className="text-[5vh] text-[#bb2649]">
                Fade - Bay Area Carpooling
              </h1>
              <p className="text-slate-50 font-bold">
                A pet project of mine that provides a means for bay area workers
                to help each other get to work on time by organizing regular
                carpooling via itinerary matching.
              </p>
                
              <a className="text-[#bb2649] relative mx-24" href="https://fade-alpha.vercel.app">
                  Visit
              </a>
                
                
              <a className="text-[#bb2649] relative mx-24" href="https:/github.com/oaluna/fade-bay-area-carpooling">
                  Demo
              </a>
                
            </div>
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662574472/29915692-c2441a79aa89b9ed0f6be9da1c0b491c_e6ltqj.png"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-slate-50 md:block bg-gradient-to-tr from-slate-500 to-gray-500 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
              <h1 className="text-[5vh] text-[#bb2649]">
                Glowing Flowers | Plants & Gifts
              </h1>
              <p className="text-slate-50 font-bold">
                An e-commerce web application for a local business. Users can
                store desired items in a cart that can be accessed at a future
                session thanks to the use of Redux Persist.
              </p>

                
          <a hre className="text-[#bb2649] relative mx-24"f="https://glowing-flowers.com">
                  Visit
              </a>
                
                
              <a className="text-[#bb2649] relative mx-24" href="https://github.com/oaluna/glowing-flowers">
                  Demo
              </a>
                
            </div>
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1664340809/Web_capture_27-9-2022_215232_zz981e.csb.app_kcjspz.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-slate-50 md:block bg-gradient-to-tr from-slate-500 to-gray-500 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
              <h1 className="text-[5vh] text-[#bb2649]">
                Landing Page Template - For sale on GumRoad.io
              </h1>
              <p className="text-slate-50 font-bold">
                A landing page that uses tailwindcss and ReactJS to provide
                other developers with a template that will save them hours of
                researching web designs for their clients.
              </p>
                
              <a className="text-[#bb2649] relative mx-24" href="https://oaluna.gumroad.com/l/template-react-tailwind-motion">
                  Visit
              </a>
                
                
              <a className="text-[#bb2649] relative mx-24" href="https://oaluna.gumroad.com/l/template-react-tailwind-motion">
                  Demo
              </a>
                
            </div>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1617817991/oscarlunadotdev/globoMantics.png"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] p-12 bottom-5 hidden py-5 text-center text-slate-50 md:block bg-gradient-to-tr from-slate-500 to-gray-500 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
            <h1 className="text-[5vh] text-[#bb2649]">
              Globomantics - Real Estate App
            </h1>
            <p className="text-slate-50 font-bold">
              A landing page for a real-estate company where users can search
              listings as well as filter search results by price range and by
              location.
            </p>
              
            <a className="text-[#bb2649] relative mx-24" href="https://globomantics.vercel.app">
                Visit
            </a>
              
              
            <a className="text-[#bb2649] relative mx-24" href="https://github.com/oaluna/globomantics">
                Demo
            </a>
              
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          className="z-30 absolute lg:left-[40vw] lg:top-72 flex w-[15%] items-center border-0 bg-none p-0 text-center text-[#bb2649] transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-[#bb2649] hover:no-underline hover:opacity-90 hover:outline-none focus:text-[#bb2649] focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none hover:animate-bounce"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          className="w-30 absolute lg:-right-64 lg:top-72 flex w-[15%] items-center border-0 bg-none p-0 text-center text-[#bb2649] transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-[#bb2649] hover:no-underline hover:opacity-90 hover:outline-none focus:text-[#bb2649] focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none hover:animate-bounce"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
