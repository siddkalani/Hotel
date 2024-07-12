import React from 'react'
import { Parallax } from 'react-parallax';

const HeroSection = () => {
  return (
    <section className='w-full h-full'>
      <div className='flex-custom-center h-full w-full'>
        <Parallax 
          strength={400} 
          bgImage="/images/section1/poolsidetable-1920x-q72.jpg"
          bgImageAlt="Poolside table"
          bgImageStyle={{objectFit: "cover"}}
        >
          <div style={{ height: '110vh' }} className='hero-image flex-custom-center'>
            <div className='flex-custom-center w-full h-full'>
              <div className='flex-custom-col items-center justify-center hero-flex-gap'>
                <div className='flex-custom-center'>
                  <picture>
                    <img src="/images/symbols/icon.svg" alt="" className='hero-logo filter-white flex-custom-center' />
                  </picture>
                </div>
                <div className='text-center'>
                  <span className='span-margin eyebrow text-hero-span'> A restaurant well worth a journey</span>
                </div>
                <div className='hero-title flex-custom-center text-center'>
                  <h1 className='hero-h1 mt-[-0.175em] mb-[-0.25em] text-[var(--color-white)]'>Prize winning Balinese bistro</h1>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* footer img */}
      <div className='w-full h-full flex-custom-center hero-margin md:hero-margin-large'>
        <picture className='card-width md:card-width-large h-full'>
          <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1]" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
        </picture>
      </div>
    </section>
  )
}

export default HeroSection