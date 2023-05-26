import { useState } from "react";

const NavBar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 w-full bg-transparent after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:after:hidden">
        <div className="relative mx-auto max-w-screen">
          <nav
					aria-label="main navigation"
            className="flex h-[5.5rem] items-center justify-between text-3xl text-slate-700 font-bold w-full"
            role="navigation"
          >
            
            <a
              id="OscarLunaDotDev"
              aria-label="OscarLunaDotDev logo"
              aria-current="page"
              className="flex items-center gap-2 hover:text-[#bb2649] whitespace-nowrap p3 text-4g focus:outline-none lg:flex-1"
              href="/"
            >
              <img
                className="w-1/2 lg:w-24"
                src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1662069198/logo_lq7li3.svg"
                alt="logo"
              />
            </a>
          
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
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#hero"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Home</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold last:py-4 bg-transparent lg:px-4"
                  href="#about"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">About</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#experience"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Experience</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#skills"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Skills</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#projects"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Projects</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#testimonials"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Testimonials</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#blog"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Blog</h1>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 hover:text-[#bb2649] text-slate-900 font-bold py-4 bg-transparent lg:px-4"
                  href="#contact"
                >
                  <h1 className="mix-blend-color-burn leading-none uppercase">Contact</h1>
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
