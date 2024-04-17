import React from 'react'

const Tittle = ({tittle,decription}) => {
  return (
    <div className='tittle flex flex-col items-center justify-center m-[3rem] text-center'>
        <p className='uppercase  text-[#212EA0] text-[1rem] font-semibold'>{tittle}</p>
        <h1 className='text-[#000F38] text-[2rem] font-bold'>{decription}</h1>

    </div>
  )
}

export default Tittle