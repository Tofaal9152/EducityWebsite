import React from 'react'
import gallery_1 from '../edusity_assets/gallery-1.png'
import gallery_2 from '../edusity_assets/gallery-2.png'
import gallery_3 from '../edusity_assets/gallery-3.png'
import gallery_4 from '../edusity_assets/gallery-4.png'
import dark_arrow from '../edusity_assets/white-arrow.png';


const Gallery = () => {
  return (
    <div id='gallery'>
      <div className="imagesg grid grid-cols-2 grid-rows-2 gap-4 lg:flex lg:items-center lg:justify-between">
        <img className='lg:w-[25%]  rounded-2xl' src={gallery_1} alt="" />
        <img className='lg:w-[25%]  rounded-2xl' src={gallery_2} alt="" />
        <img className='lg:w-[25%]  rounded-2xl' src={gallery_3} alt="" />
        <img className='lg:w-[25%]  rounded-2xl' src={gallery_4} alt="" />

      </div>
      <button className='m-[3rem] flex items-center justify-center  hover:bg-[#4f60ff] hover:ring-2 hover:ring-[#fff]  cursor-pointer text-[1rem] font-semibold duration-300 bg-[#212EA0] text-[#fff] py-[14px] px-[25px] rounded-[2rem] mx-auto'>Explore more <img className="w-[20px] m-1" src={dark_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery