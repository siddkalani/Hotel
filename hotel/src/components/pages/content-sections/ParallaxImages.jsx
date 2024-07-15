import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImages = () => {
  return (
    <>
      <div className='w-full h-full flex sm:flex-row flex-col items-center justify-between parallax-gap'>
        <div className='lg:parallax-img-width w-full'>
          <Parallax
            bgImage="https://www.thedamai.com/media/pages/dining/a65989b65e-1703335799/header-restaurant-cropped-v2-810x1080-crop-q72.jpg"
            strength={100}
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div className='flex h-[60vh] items-center justify-center'>
            </div>
          </Parallax>
        </div>
        <div className='lg:parallax-img-width sm:mt-[var(--container-padding)] lg:block sm:hidden w-full'>
          <Parallax
            bgImage="https://www.thedamai.com/media/pages/dining/abeb3c7f2c-1703335803/kien-the-damai-304-810x1080-crop-q72.jpg"
            strength={100}
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div className='flex h-[60vh] items-center justify-center'>
            </div>
          </Parallax>
        </div>
        <div className='lg:parallax-img-width w-full'>
          <Parallax
            bgImage="https://www.thedamai.com/media/pages/dining/655887892a-1703335808/setting-tables-2-copy-810x1080-crop-q72.jpg"
            strength={100}
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div className='flex h-[60vh] items-center justify-center'>
            </div>
          </Parallax>
        </div>
      </div>
      {/* <div className='h-screen w-screen'></div> */}
    </>
  );
}

export default ParallaxImages;