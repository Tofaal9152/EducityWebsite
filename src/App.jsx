import React from 'react'
import Navbar from './components/Navbar'
import Body1 from './components/Body1'
import Programme from './components/Programme'
import Tittle from './components/Tittle'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Body1 />
      <div className='px-[5%] md:px-[7%]'>
        <Tittle tittle="Our Programme" decription="What we offers"/>
        <Programme />
        <Tittle tittle=" Welcome to our community!" decription="Get to know more about who we are and what we do."/>
        <About/>
        <Tittle tittle="Gallery" decription="Campus photos"/>
        <Gallery/> 
        <Tittle tittle="Testimonials" decription="What student says"/>
        <Testimonials/>
        <Tittle tittle="contact us" decription="Get in touch"/>
        <Contact/>
        
      </div>
    </>
  )
}

export default App