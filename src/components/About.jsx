import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[lightblue]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4  grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>HI. I'm Denis, nice to meet you on my portfolio</p>
          </div>
          <div>
            <p>
              I am a highly motivated individual with a passion for technology
              and a natural inclination towards problem-solving. I possess
              extensive technical skills in programming languages such as Java,
              Python, React Js and Node Js, as well as web design. My strong
              communication, organizational, and task management skills make me
              an effective team player. I am able to work independently, handle
              pressure, multitask and pay attention to detail to meet deadlines.
              I am always looking for new challenges and opportunities to
              improve my skills and contribute to a dynamic and innovative team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
