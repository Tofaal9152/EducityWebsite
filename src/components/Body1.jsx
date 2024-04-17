import React from 'react';
import img from '../edusity_assets/hero.png';
import dark_arrow from '../edusity_assets/dark-arrow.png';


const Body1 = () => {
  return (
    <div id='body' className='px-[5%] md:px-[7%] flex items-center justify-center  w-full min-h-screen bg-cover bg-center text-white' style={{ backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${img})` }}>
      <div className="heroTex  max-w-[800px] text-center space-y-6">
        <h2 className='text-4xl font-bold'>We Ensure better education for a better world</h2>
        <p className='leading-6'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='duration-300 flex items-center justify-center cursor-pointer text-[1rem] font-semibold hover:bg-transparent hover:ring-2 hover:ring-[#fff] hover:text-[#fff] bg-[#FFF] text-[#212121] py-[14px] px-[25px] rounded-[2rem] mx-auto'>
          Explore more <img className='invert-[0.45] w-[20px] m-1 ' src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Body1;

 
