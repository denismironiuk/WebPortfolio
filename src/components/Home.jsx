import React, { useEffect, useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Animated from './AnimatedLetters/Animated'
import { Link } from 'react-scroll'

function Home() {
  const[lettersClass,setLettersClass]=useState('text-animate')
  const greetArray="Hi, my name is:".split('')
  const nameArray="Mironiuk Denis".split('')
  const jobArray="Web Developer".split('')
  const descArray="I'm specialize in building responsive full stack web applications and have a strong focus on creating user-friendly and efficient expiriences.".split('')

 
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
        <div className='max-w-[1000px] m-auto px-[4rem] flex flex-col justify-center h-full pt-24'>
        
        <p className="text-white  text-2xl font-bold ">
          <Animated 
          letterClass={lettersClass}
          strArray={greetArray}
          idx={1}
          />
          </p>
        <h1 className="text-white text-4xl pt-2 font-bold">
          <Animated 
            letterClass={lettersClass}
            strArray={nameArray}
            idx={15}
          />
          </h1>
        <h2 className="text-white text-4xl pt-2 font-bold">
         <Animated
         letterClass={lettersClass}
         strArray={jobArray}
         idx={29}
         />
          </h2>
        <p className="text-white pt-4">
           <Animated
           letterClass={lettersClass}
           strArray={descArray}
           idx={42}
           />
           </p>
        <div className='my-20 '>
            <Link to='work' spy={true} smooth={true} duration={1000}  className=' w-[15rem]  button-animation border-2 border-[lightblue] px-6 py-3  text-white text-2xl flex items-center  rounded-sm '>View Work <HiArrowNarrowRight/> </Link>
        </div>
        
        </div>
        
    </div>
  )
}

export default Home