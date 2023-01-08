import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iczm165', 'template_dtylrt1', form.current, 'cr7o3u0VsSDvTNm1Q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id="join-us">
        <div className='left-j'>
            <hr></hr>
            <div>
                <span className='Stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='Stroke-text'>WITH US ?</span>
            </div>

        </div>
        <div className='right-j'>
            <form ref = {form} className='email-container' onSubmit={sendEmail} >
                <input type ="email" name="from_name" placeholder='Enter your Email Address ' />
                <button className='btn btn-j'>Join us</button>
            </form>

        </div>


    </div>
  )
}

export default Join