import React from 'react'
import HeroContent from '../sub/HeroContents'


const Hero = () => {
  return (
    <div 
    id="Hero"
    className='relative flex flex-col h-full w-full'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-391px] left-0 z-[1] w-full h-full object-cover'
      >
        <source src='/blackhole.webm' type='video/webm'/>
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero
