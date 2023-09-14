import { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dirm55q', 'template_6m1r0dd', form.current, '8_84KpcT0GlXaAyc4').then((result) => {
      console.log(result.text);
      setDone(true)
    }, (error) => {
      console.log(error.text)
    });
  };
  
  return (
    <div className="contact-form mt-10 mb-20 flex md:h-[70vh] py-10" id='Contact'>
      <div className="w-left">
        <div className="awesome flex flex-col text-4xl text-white mb-5">
          <span data-aos="fade-right"  data-aos-duration="3000">Get in Touch</span>
          <span data-aos="fade-left"  data-aos-duration="3000">Contact Us</span>
          <div className="blur s-blur1" 
         ></div>
        </div>
      </div>
      <div className="c-right ">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className='user' placeholder='Name'/>
          <input type="email" name="user_email" className='user' placeholder='Email'/>
          <textarea name="message" className='user' placeholder='Message'cols='30' rows='20'/>
          <input type="submit" value="Send" className='button d-button px-5 py-2 font-bold text-white bg-slate-700 hover:bg-slate-900 rounded-2xl' />
          <span>{done && "Thanks for contacting me"}</span>
          <div className="blur c-blur1" ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact