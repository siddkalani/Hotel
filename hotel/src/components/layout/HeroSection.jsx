import React from 'react'

const HeroSection = () => {
  return (
    <section className='w-full h-full'>
      <picture className='w-full h-full'>
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src='/images/section1/poolsidetable-1920x-q72.jpg' 
          alt="Hero image"
        />
      </picture>
    </section>
  )
}

export default HeroSection