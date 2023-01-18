import React, { useState, useEffect } from 'react';

const Notification = ({ message, duration,status,closeNotification,setShow,show }) => {
 

  useEffect(() => {
    console.log('in')
   
    setTimeout(() => {
        setShow(false);
      closeNotification()
    },duration);
  }, [duration, message,status]);

  return (
    <div className={`notification  ${status==='success'?'success':status==='error'?'error':''} ${show ? 'show' : 'hide'}`}>
  {message}
    </div>
  );
};

export default Notification;