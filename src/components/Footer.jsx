import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between border-t-2 font-medium p-[10px]'>
        <p>© 2024 Edusity. All rights reserved.</p>
        <ul className='md:flex flex-col md:flex-row space-y-3 md:space-x-3'>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer
