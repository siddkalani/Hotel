import React from 'react'
import HeroSection from '../pages/content-sections/HeroSection'
import DiningIntro from '../pages/content-sections/DiningIntro'
import ParallaxImages from '../pages/content-sections/ParallaxImages'
import ImageSlider from '../pages/content-sections/ImageSlider'
import MenuSection from '../pages/content-sections/MenuSection'
import KitchenPage from '../pages/content-sections/KitchenPage'
DiningIntro

const Main = () => {
  return (

    <div className='w-full h-full relative'>
      <HeroSection />
      <DiningIntro />
      <ParallaxImages />
      <ImageSlider />
      <MenuSection />
      <KitchenPage />
      
    </div>

  )
}

export default Main