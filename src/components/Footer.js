import React from "react";
import Logo from "./Logo";
import Contact from "./Contact";

function Footer() {
  return (
    <section className="bg-transparent body-font h-auto">
      <div className="container flex flex-col md:flex-row items-center px-8 pt-44 mx-auto max-w-6xl">
        <a href="#_" className="text-lg p-1">
          <Logo />
        </a>
        <p className="mt-4 text-sm text-slate-900 tracking-tight leading-none sm:ml-4 sm:pl-4 sm:bord sm:mt-0">
          &copy; 2022 by Oscar Armando Luna. All Rights Reserved.
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://facebook.com/aka.kay.drama"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-facebook fa-xl text-blue-500"></i>
          </a>

          <a
            href="https://instagram.com/LunaWebDev"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-instagram fa-xl text-red-200"></i>
          </a>

          <a
            href="https://twitter.com/LunaWebDev"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-twitter fa-xl text-blue-300"></i>
          </a>

          <a
            href="https://github.com/oaluna"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-github fa-xl text-black"></i>
          </a>

          <a
            href="https://dev.to/oaluna"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-dev fa-xl text-black"></i>
          </a>

          <a
            href="https://medium.com/@oaluna"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fa-brands fa-medium fa-xl text-gray-100"></i>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Footer;
