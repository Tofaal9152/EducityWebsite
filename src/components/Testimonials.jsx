import React, { useRef, useEffect } from 'react';
import back_icon from '../edusity_assets/back-icon.png'
import next_icon from '../edusity_assets/next-icon.png'
import user_1 from '../edusity_assets/user-1.png'
import user_2 from '../edusity_assets/user-2.png'
import user_3 from '../edusity_assets/user-3.png'
import user_4 from '../edusity_assets/user-4.png'

const Testimonials = () => {
  const slide = useRef();
  let i = 0;

  const handleBackward = () => {
    if (i < 0) {
      i += 25;
    }
    slide.current.style.transform = `translateX(${i}%)`;
  };

  const handleForward = () => {
    if (i > -50) {
      i -= 25;
    }
    slide.current.style.transform = `translateX(${i}%)`;
  };


  return (
    <div id='testimonials' className="imgContet  flex relative items-center justify-center p-{80px} my-[80px] ">
      <img onClick={handleBackward} className='hover:bg-[#4f60ff] duration-300 z-10 absolute left-0 w-[50px] rounded-[50%] p-[15px] cursor-pointer bg-[#212EA0]' src={back_icon} alt="" />
      <img onClick={handleForward} className='hover:bg-[#4f60ff] duration-300 z-10 absolute right-0 w-[50px] rounded-[50%] p-[15px] cursor-pointer bg-[#212EA0]' src={next_icon} alt="" />
      <div className="slider overflow-hidden leading-7 p-[40px] rounded-[10px] text-[#676767] ">

        <ul ref={slide} className="duration-500 flex w-[200%] p-[1.5rem] space-x-[3rem]">
          <li className="p1 shadow-md space-y-8 p-[20px] ">
            <div className="flx1 flex items-center space-x-3">
              <img className='rounded-[50%] w-[4rem] ring-4 ring-[#212EA0]' src={user_1} alt="" />
              <div>
                <h3 className='font-bold text-[#212EA0]'>William Jackson</h3>
                <span className='font-semibold'>Edusity, USA</span>
              </div>
            </div>
            <div className="flx2">
              <p className='font-semibold text-[0.9rem]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive   community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my  expectations</p>
            </div>
          </li>
          <li className="p1 shadow-md space-y-8 p-[20px] ">
            <div className="flx1 flex items-center space-x-3">
              <img className='rounded-[50%] w-[4rem] ring-4 ring-[#212EA0]' src={user_2} alt="" />
              <div>
                <h3 className='font-bold text-[#212EA0]'>William Jackson</h3>
                <span className='font-semibold'>Edusity, USA</span>
              </div>
            </div>
            <div className="flx2">
              <p className='font-semibold text-[0.9rem]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive   community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my  expectations</p>
            </div>
          </li>
          <li className="p1 shadow-md space-y-8 p-[20px] ">
            <div className="flx1 flex items-center space-x-3">
              <img className='rounded-[50%] w-[4rem] ring-4 ring-[#212EA0]' src={user_3} alt="" />
              <div>
                <h3 className='font-bold text-[#212EA0]'>William Jackson</h3>
                <span className='font-semibold'>Edusity, USA</span>
              </div>
            </div>
            <div className="flx2">
              <p className='font-semibold text-[0.9rem]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive   community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my  expectations</p>
            </div>
          </li>
          <li className="p1 shadow-md space-y-8 p-[20px] ">
            <div className="flx1 flex items-center space-x-3">
              <img className='rounded-[50%] w-[4rem] ring-4 ring-[#212EA0]' src={user_4} alt="" />
              <div>
                <h3 className='font-bold text-[#212EA0]'>William Jackson</h3>
                <span className='font-semibold'>Edusity, USA</span>
              </div>
            </div>
            <div className="flx2">
              <p className='font-semibold text-[0.9rem]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive   community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my  expectations</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials


//   