import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-scroll";
import phonebook from '../assets/projects/phonebook.png'
import netflix from '../assets/projects/netflix.png'

function Work() {
  return (
    <div name="work" className="w-full h-screen bg-[#0a192f] text-[white]">
      <div className="max-w-[1000px] m-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-[1px]  border-[white]">
            Work Expirience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 shadow-lg shadow-indigo-500/50 ">
          <div
            style={{
              backgroundImage: `url(${phonebook})`,
            }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span></span>
              <div>
                <a className="p-4" href="/">
                  <a href="https://phonebook-complete.herokuapp.com/contacts">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg bg-black/60 ">
                    Demo
                  </button>
                  </a>
                </a>
                <a className="p-4" href="/">
                  <a href="https://github.com/denismironiuk/Phonebook">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg  bg-black/60">
                    Code{" "}
                  </button>
                  </a>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${netflix})`,
            }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
             <div>
              <span></span>
              <div>
                <a className="p-4" href="/">
                  <a href="https://test-b367c.web.app/login">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg bg-black/60 ">
                    Demo
                  </button>
                  </a>
                </a>
                <a className="p-4" href="/">
                  <a href="https://github.com/denismironiuk/Netflix">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg  bg-black/60">
                    Code{" "}
                  </button>
                  </a>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
            }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span></span>
              <div>
                <a className="p-4" href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg bg-black/60 ">
                    Demo
                  </button>
                </a>
                <a className="p-4" href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg  bg-black/60">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
