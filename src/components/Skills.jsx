
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Mongo from '../assets/mongo.png'
import React from '../assets/react.png'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0A192F] text-[white]'>
        <div className='text-center max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-2 border-[lightblue]  '>Skills</p>
                <p className='py-4 text-center'>These are techologies I'worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 text-center py-8 shadow-lg shadow-indigo-500/50 '>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                    <p className='py-4'>HTML</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML" />
                    <p className='py-4'>CSS</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={React} alt="HTML" />
                    <p className='py-4'>React</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={Node} alt="HTML" />
                    <p className='py-4'>Node</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML" />
                    <p className='py-4'>Mongo</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML" />
                    <p className='py-4'>GitHub</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Skills