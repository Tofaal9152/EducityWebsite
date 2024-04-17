import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import './sidemenu.css'
import logo from '../edusity_assets/logo.png'
import right_menu from '../edusity_assets/menu-icon.png'
import svg from '../edusity_assets/cross.svg'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [iconvisible, seticonvisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > 70) ? setSticky(true) : setSticky(false);
    })
  }, [])
  const handlevisible = () => {
    iconvisible?seticonvisible(false):seticonvisible(true)
    

  }

  return (
    <nav id='navbar' className={`px-[5%] lg:px-[7%]  flex justify-between items-center   w-[100%] lg:fixed lg:top-0 lg:left-0 lg:z-20 text-[#fff]  ${sticky ? 'lg:bg-[#212EA0] lg:duration-500' : ''}`}>
      <img className='w-[180px]' src={logo} alt="" />
      <img onClick={handlevisible} className={`z-[200] visible  lg:invisible w-[20px] cursor-pointer`} src={right_menu} alt="" />
      <ul className={`${iconvisible ? 'visible ' : 'right-[-11rem]'} duration-500 lg:visible lg:flex lg:items-center lg:space-x-8`}>
        <li className='hover:border-b-2  duration-200 cursor-pointer my-1 text-[1rem]'>
          <Link to='body' smooth={true} offset={0} duration={500}>Home </Link></li>

        <li className='hover:border-b-2  duration-200 cursor-pointer my-1 text-[1rem]'>
          <Link to='programmess' smooth={true} offset={-250} duration={500}>Program </Link></li>

        <li className='hover:border-b-2  duration-200 cursor-pointer my-1 text-[1rem]'>
          <Link to='about' smooth={true} offset={-250} duration={500}>About us </Link></li>

        <li className='hover:border-b-2  duration-200 cursor-pointer my-1 text-[1rem]'>
          <Link to='gallery' smooth={true} offset={-200} duration={500}>Campus </Link></li>

        <li className='hover:border-b-2  duration-200 cursor-pointer my-1 text-[1rem]'>
          <Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials </Link></li>

        <Link className='duration-300 font-semibold hover:bg-transparent hover:ring-2 hover:ring-[#fff] hover:text-[#fff] cursor-pointer my-1 text-[1rem] bg-[#FFF] text-[#212121] py-[14px] px-[25px] rounded-[2rem]' to='contact' smooth={true} offset={-200} duration={500}>Contact us</Link>

      </ul>

    </nav>
  )
}

export default Navbar