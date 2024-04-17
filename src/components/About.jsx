import React from 'react'
import img1 from '../edusity_assets/about.png'
import img2 from '../edusity_assets/play-icon.png'

const About = () => {
    return (
<div id='about' className='flex flex-col lg:flex-row space-y-[2rem] lg:space-x-[2rem] items-center justify-center'>
    <div className="order-2 lg:order-1 left relative basis-[45%]">
        <img className='rounded-2xl w-[100%]' src={img1} alt="" />
        <img className='w-[3rem] absolute inset-0 m-auto' src={img2} alt="" />
    </div>
    
    <div className="order-1 lg:order-2 right basis-[45%]">
        <h3 className="text-3xl font-bold mb-4 text-[#212EA0] text-center">RAJSHAHI UNIVERSITY</h3>
        <h2 className="text-4xl font-bold mb-6 text-center">Something About This Varsity</h2>
        <p className="mb-4">Rajshahi University, located in the city of Rajshahi in Bangladesh, is one of the largest and oldest public universities in the country. Established in 1953, it has a rich history and a reputation for academic excellence. The university offers undergraduate and postgraduate programs in various disciplines, including arts, science, business, engineering, and agriculture.</p>
        <p className="mb-4">The university is renowned for its faculty members who are experts in their respective fields and contribute significantly to research and scholarship. It has a diverse student body, attracting students from different parts of Bangladesh and beyond.</p>
        {/* <video className='hidden' src={vid1} muted controls autoPlay></video> */}
    </div>
</div>
    )
}

export default About

