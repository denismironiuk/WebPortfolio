import React,{useRef} from 'react'
import MyMap from './MyMap'
import emailjs from '@emailjs/browser';

function Contact() {

  const refForm=useRef()

  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_h8ery0w', 'template_p4s6cpi', refForm.current, 'uEUeUdHz54eEHspGE')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] p-2 text-[white] '>
        <div className='  sm:px-[4rem] flex flex-col justify-center w-full h-full  '>
          <div className=' grid  h-full mt-4  sm:grid-cols-2  shadow-lg shadow-indigo-500/50'>
            <form ref={refForm} onSubmit={sendEmail}  className=' flex  flex-col  m-auto w-full    p-8'>
                
                <p className='text-4xl font-bold inline border-b-[1px] pb-8 '> Contact Me </p>
               
                <input className='p-2 bg-[lightblue]/5 placeholder:text-[lightblue] ' type="text" placeholder='Name' name='name' required/>
                <input className='my-4 p-2  bg-[lightblue]/5 placeholder:text-[lightblue] placeholder:pl-4' type="Email" placeholder='Email' name='email' required/>
           <textarea className='  bg-[lightblue]/5 placeholder:text-[lightblue] pl-4' name="message" id="message"  rows="10" placeholder='Message'></textarea>
            <div className='self-end pt-4'>
            <button type='submit' className='px-4 py-1 border-[1px] border-[lightblue] rounded-md '>Send</button>
            </div>
            </form>
            <div className='h-[300px] sm:border-[1px] border-[#5d83bb] sm:h-full '>
            <MyMap />
            </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Contact