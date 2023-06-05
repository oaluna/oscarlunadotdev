import React from "react";
import Fade from "react-reveal/Fade"
import SKILLS_DATA from "../data/skillsData";

const SkillPage = () => {
  const [skillTitle, setSkillTitle] = React.useState("");
  const [skillImg, setSkillImg] = React.useState("");

  React.useEffect(() => {}, []);

  return (
    <div className="max-w-7xl px-10 mx-auto sm:text-center tails-selected-element">
      <h1 className="text-blue-500 font-medium uppercase">Skills</h1>
      <h5 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-slate-900">
        What I can do for you as a part of your team
      </h5>
      <div className="flex flex-row my-12 sm:my-16 flex-wrap w-full space-x-2 space-y-3">
        {SKILLS_DATA.map((skill) => (
          <>
            {skill.id !== 7 && (
							<Fade up>
              <div className="rounded-lg p-10 flex flex-row mx-0 space-y-3 items-center justify-evenly shadow-lg bg-[#bb2649] w-[45%] h-64">
                <lottie-player
                  src={skill.icon}
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  className="w-auto flex-col items-start"
                ></lottie-player>
                <div className="flex flex-col text-left w-full">
                  <p className="font-bold mt-4">{skill.name}</p>
                  <p className="tracking-tight leading-[0.95]">{skill.description}</p>
                </div>
              </div>
							</Fade>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
