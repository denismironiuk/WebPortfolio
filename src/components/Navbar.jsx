import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [active,setActive]=useState(false)

  const handleToggleNav = () => {
    setNav(nav=>!nav);
  };
 



  return (
    <div className="fixed w-full  flex justify-between items-center px-4 bg-transparent/80 text-gray-300 z-[99]  ">
      <div>
        <h2
          className="font-bold  text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#4f5152] to-[#4dccf7]"
          style={{ fontFamily: "Moon Dance" }}
        >
          DM
        </h2>
      </div>
      {/*Menu Section*/}

      <ul className="hidden md:flex ">
        <li >
          <Link   to="home" spy={true} smooth={true} duration={1000} >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link  to="about" spy={true} smooth={true} duration={1000}>
           About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={1000}>
          Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" spy={true} smooth={true} duration={1000}>
             Work
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" spy={true} smooth={true} duration={1000}>
          Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handleToggleNav}
        className="absolute right-3 z-40 md:hidden"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          nav
            ? " absolute top-0 left-0 w-full h-screen tex-4xl bg-[#0a192f] flex flex-col justify-center items-center z-99 "
            : "hidden"
        }
      >
       <li >
          <Link onClick={handleToggleNav} to="home" spy={true} smooth={true} duration={1000} >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleToggleNav}  to="about" spy={true} smooth={true} duration={1000}>
           About
          </Link>
        </li>
        <li>
          <Link onClick={handleToggleNav} to="skills" spy={true} smooth={true} duration={1000}>
          Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleToggleNav} to="work" spy={true} smooth={true} duration={1000}>
             Work
          </Link>
        </li>
        <li>
          {" "}
          <Link onClick={handleToggleNav} to="contact" spy={true} smooth={true} duration={1000}>
          Contact
          </Link>
        </li>
      </ul>
      <div className="hidden sm:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-0 duration-[1s] ease-in-out z-99 bg ">
            <a className="flex justify-between items-center " href="https://www.linkedin.com/in/denis-mironiuk">
              LinkedIn <FaLinkedinIn className=" hover:text-[lightblue] text-[5rem]" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-0 duration-[1s] ease-in-out ">
            <a className="flex justify-between items-center " href="/">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-0 duration-[1s] ease-in-out ">
            <Link to="email" className="flex justify-between items-center " spy={true} smooth={true} duration={1000} >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
