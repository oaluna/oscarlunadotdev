import React from "react";

const BlogCta = () => (
  <section id="blog" className="section h-full">
    <div className="max-w-6xl mx-auto py-0 my-0 px-10 md:py-24 px-6 md:px-8 text-center">
      <h2 className="box-border m-0 text-3xl uppercase font-bold leading-tight tracking-tight text-gray-100">
        Blog
      </h2>
      <p className="max-w-3xl py-8 mx-auto text-md text-gray-300">
        Take a look at some of my latest articles from my blog. You can read the
        rest of my posts on Medium. Click{" "}
        <a className="text-blue-500" href="https://medium.com/@oaluna">
          here
        </a>{" "}
        to visit.
      </p>
    </div>
  </section>
);

export default BlogCta;
