import React, { useState } from 'react'
import msgIcon from '../edusity_assets/msg-icon.png'
import locationIcon from '../edusity_assets/location-icon.png'
import phoneIcon from '../edusity_assets/phone-icon.png'
import mailicon from '../edusity_assets/mail-icon.png'
import Footer from './Footer'

const Contact = () => {
   
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "81c4c90b-0153-4cdf-baaa-08e506e507b1");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
    return (
        <div>
          <div id='contact' className='md:contact md:flex flex-col md:flex-row space-y-6 md:space-x-3'>
            
            <div className="left basis-1/2 space-y-6">
                <h1 className='flex font-bold text-[20px]'>Send us a message<img className='w-[30px] ml-3' src={msgIcon} alt="" /></h1>
                <p className='font-semibold'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul className='space-y-6'>
                    <li className='flex space-x-3'><img className='w-[25px]' src={mailicon} alt="" /><span>tofaal91522@gmailcom</span></li>
                    <li className='flex space-x-3'><img className='w-[25px]' src={phoneIcon} alt="" /><span>+880 173 224 3108</span></li>
                    <li className='flex space-x-3'><img className='w-[25px]' src={locationIcon} alt="" /><span>Adi Tangail, Tangail P.O 1900, Bangladesh</span></li>
                </ul>
            </div>
            <div className="right">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input className='block bg-[#EBECFE] w-[100%] border-0 outline-0 p-[1rem] mt-[5px] mb-[15px]' type="text" name='name' placeholder='Enter Your Name' required />

                    <label>Phone Number</label>
                    <input className='block bg-[#EBECFE] w-[100%] border-0 outline-0 p-[1rem] mt-[5px] mb-[15px]' type="number" name='phone' placeholder='Enter Your Phone Number' required />

                    <label>Enter Your Message Here</label>
                    <textarea className=' bg-[#EBECFE] w-[100%] border-0 outline-0 p-[1rem] mt-[5px] mb-[15px] resize-none' name="message" rows="6" placeholder='Enter Your Message...' ></textarea>

                    <button  className='duration-300 hover:bg-transparent hover:ring-2 hover:ring-[#212EA0] hover:text-[#212EA0] cursor-pointer text-[1rem] bg-[#212EA0] text-[#fff] py-[14px] px-[25px] rounded-[2rem] mx-auto'>Submit</button>
                </form>
                <span className='block mt-[1rem] font-semibold text-[#212EA0]'>{result}</span>
            </div>
          </div>
          <Footer/>
        </div>
        
    )
}

export default Contact