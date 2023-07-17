import React from 'react'

const Work = ({image,urlLive,urlGitHub}) => {
  return (
    <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span></span>
              <div>
                <a className="p-4" href="/">
                  <a href={urlLive}>
                    <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg bg-black/60 ">
                      Demo
                    </button>
                  </a>
                </a>
                <a className="p-4" href="/">
                  <a href={urlGitHub}>
                    <button className="text-center rounded-lg px-4 py-3 bg-white text-[lightblue] font-bold text-lg  bg-black/60">
                      Code{" "}
                    </button>
                  </a>
                </a>
              </div>
            </div>
          </div>
  )
}

export default Work