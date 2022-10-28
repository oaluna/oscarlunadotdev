import PROJECT_DATA from "../data/projectData";

function ProjectCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[-70vh] md:mb-20vh md:mt-[-40vh]">
      {PROJECT_DATA.map((project) => (
        <>
          <div key={project.id} className="shadow-md shadow-gray-900/30">
            <img
              className="w-full h-56 object-cover overflow-hidden sm:my-0 bg-gray-900/30"
              src={
                project.image
                  ? project.image
                  : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              }
              alt="placeholder"
            />
            <div className="flex flex-col items-start justify-start md:justify-center w-full p-6 text-left space-y-3  bg-[color:var(--oxford-blue-2)]">
              <h4 className="w-full text-2xl font-bold text-blue-200 tracking-normal">
                {project.title}
              </h4>
              <p className="w-full text-md leading-normal tracking-tight text-[color:var(--alice-blue)]">
                {project.description}
              </p>
              <div className="flex flex-col space-y-0 items-center lg:items-start justify-end w-full text-left">
                <a href="#contact">
                  <button
                    className="font-[Sen] 
            w-auto px-3 py-2 text-lg 
            leading-relaxed 
            text-[color:var(--alice-blue)] 
            hover:text-gray-100 
            lg:items-start 
            font-semibold 
            bg-gradient-to-br from-purple-500 to-emerald-500 via-blue-500
            shadow-sm hover:shadow-lg hover:shadow-zinc-100/10
            shadow-zinc-100/30
            uppercase 
            tracking-tight 
            w-[100vw] 
            max-w-xl"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default ProjectCard;
