import React, { useRef, useState } from "react";
import MyMap from "./MyMap";
import emailjs from "@emailjs/browser";
import Notification from "./Notifications/Notification";

function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  const closeNotification=()=>{
    setMessage('')
    setStatus('')
  }
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h8ery0w",
        "template_p4s6cpi",
        refForm.current,
        "uEUeUdHz54eEHspGE"
      )
      .then(
        (result) => {
          console.log(result.message)
          setMessage("The message has sent successfuly!!!");
          setStatus("success");
          setShow(true)
        },

        (error) => {
          console.log(error)
          setMessage("Sending of mesage failed!!!");
          setStatus("error");
          setShow(true)
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] p-2 text-[white]  "
    >
      <Notification message={message} status={status} duration={5000} closeNotification={closeNotification} setShow={setShow} show={show}/>
      <div className="flex flex-col  md:flex-row sm:px-[4rem]  md:items-center  w-full h-screen  ">
        {/* <div className="  shadow-lg shadow-indigo-500/50"> */}
          <form
            ref={refForm}
            onSubmit={sendEmail}
            className="w-full h-full flex  flex-col  md:w-[50%] md:h-[50%] p-8"
          >
            <p className="text-4xl font-bold inline  pb-8 "> Contact Me </p>

            <input
              className="p-2 bg-[lightblue]/5 placeholder:text-[lightblue] pl-4 "
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="my-4 p-2  bg-[lightblue]/5 placeholder:text-[lightblue] pl-4"
              type="Email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="  bg-[lightblue]/5 placeholder:text-[lightblue] pl-4"
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div className="self-end pt-4">
              <button
                type="submit"
                className="px-4 py-1 border-[1px] border-[lightblue] rounded-md "
              >
                Send
              </button>
            </div>
          </form>
          {/* <div className="w-[50%] h-[300px] sm:border-[1px] border-[#5d83bb] sm:h-screen "> */}
            <MyMap />
          {/* </div> */}
        </div>
      </div>
    // </div>
  );
}

export default Contact;
