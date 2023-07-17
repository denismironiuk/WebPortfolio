import React from "react";

import phonebook from "../assets/projects/phonebook.png";
import netflix from "../assets/projects/netflix.png";
import recipe from "../assets/projects/recipe.png";
import eccomerse from'../assets/projects/eccomerse.png'
import Work from "./Work";

function Works() {
  return (
    <div name="work" className="w-full h-screen bg-[#0a192f] text-[white]">
      <div className="max-w-[1000px] m-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-[1px]  border-[white]">
            Work Expirience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-lg shadow-indigo-500/50 ">
          <Work
            image={phonebook}
            urlLive={"https://phonebook-complete.herokuapp.com/contacts"}
            urlGitHub={"https://github.com/denismironiuk/Phonebook"}
          />
          <Work
            image={netflix}
            urlLive={"https://test-b367c.web.app"}
            urlGitHub={"https://github.com/denismironiuk/Netflix"}
          />
          <Work
            image={recipe}
            urlLive={"https://denismironiuk.github.io/react-recipe/"}
            urlGitHub={"https://github.com/denismironiuk/react-recipe"}
          />
          <Work
            image={eccomerse}
            urlLive={"https://eccomerse-deplyment-demo.web.app/"}
            urlGitHub={"https://github.com/denismironiuk/Eccomerse"}
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
