import { useState } from "react";

const NavBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 w-full bg-transparent after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-lg text-slate-700 font-bold"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="OscarLunaDotDev"
              aria-label="OscarLunaDotDev logo"
              aria-current="page"
              className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold whitespace-nowrap p3 text-4g focus:outline-none lg:flex-1"
              href="/"
            >
              <img
                className="w-1/2 lg:w-24"
                src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662069198/logo_lq7li3.svg"
                alt="logo"
              />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center z-10 lg:hidden 
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45"
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-0 h-[28.5rem] w-full h-screen justify-center overflow-hidden overflow-y-auto overscroll-contain px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-lg"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch bg-transparent!">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#hero"
                >
                  <span className="mix-blend-color-burn">Home</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#about"
                >
                  <span className="mix-blend-color-burn">About</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#experience"
                >
                  <span className="mix-blend-color-burn">Experience</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#skills"
                >
                  <span className="mix-blend-color-burn">Skills</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#projects"
                >
                  <span className="mix-blend-color-burn">Projects</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#testimonials"
                >
                  <span className="mix-blend-color-burn">Testimonials</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#blog"
                >
                  <span className="mix-blend-color-burn">Blog</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-sky-400 text-gray-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#contact"
                >
                  <span className="mix-blend-color-burn">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
