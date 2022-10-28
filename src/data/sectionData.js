import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";
import Stack from "../components/Stack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact"

export const SECTION_DATA = [
  {
    sectionName: "#",
    component: <Hero />
  },
  {
    sectionName: "#about",
    component: <About />
  },
  {
    sectionName: "#experience",
    component: <Experience />
  },

  {
    sectionName: "#skills",
    component: <Skills />
  },
  {
    sectionName: "#stack",
    component: <Stack />
  },

  {
    sectionName: "#projects",
    component: <Projects />
  },

  {
    sectionName: "#testimonials",
    component: <Testimonials />
  },

  {
    sectionName: "#blog",
    component: <Blog />
  },
  {
    sectionName: "#contact",
    component: <Contact />
  }
];
