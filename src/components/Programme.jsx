import React from 'react'
import programme_1 from '../edusity_assets/program-1.png'
import programme_2 from '../edusity_assets/program-2.png'
import programme_3 from '../edusity_assets/program-3.png'
import programmeIcon_1 from '../edusity_assets/program-icon-1.png'
import programmeIcon_2 from '../edusity_assets/program-icon-2.png'
import programmeIcon_3 from '../edusity_assets/program-icon-3.png'

const Programme = () => {
  return (
    <div id='programmess' className=' programmes my-[80px] flex flex-col md:flex-row space-y-[1rem] md:space-x-[3rem] items-center justify-center text-white cursor-pointer'>
      <div className="programme relative ">
        <img className=' rounded-[10px] ' src={programme_1} alt="" />
        <div className="caption pt-[4rem] hover:pt-0 opacity-0 hover:opacity-100 duration-200 hover:bg-[#000F984D] flex flex-col items-center justify-center absolute top-0 right-0 left-0 bottom-0">
          <img className='w-[3rem]' src={programmeIcon_1} alt="" />
          <p>Bsc Degree</p>
        </div>
      </div>
      <div className="programme relative">
        <img className=' rounded-[10px] ' src={programme_2} alt="" />
        <div className="caption pt-[4rem] hover:pt-0 opacity-0 hover:opacity-100 duration-200 hover:bg-[#000F984D] flex flex-col items-center justify-center absolute top-0 right-0 left-0 bottom-0">
          <img className='w-[3rem]' src={programmeIcon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="programme relative">
        <img className=' rounded-[10px] ' src={programme_3} alt="" />
        <div className="caption pt-[4rem] hover:pt-0 opacity-0 hover:opacity-100 duration-200 hover:bg-[#000F984D] flex flex-col items-center justify-center absolute top-0 right-0 left-0 bottom-0">
          <img className='w-[3rem]' src={programmeIcon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programme