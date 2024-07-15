import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const images1 = [
        '/images/carousel/section-1/image1.jpg',
        '/images/carousel/section-1/image2.jpg',
        '/images/carousel/section-1/image3.jpg',
        '/images/carousel/section-1/image4.jpg',
        '/images/carousel/section-1/image5.jpg',
        '/images/carousel/section-1/image6.jpg',
        '/images/carousel/section-1/image7.jpg',
    ];

    const images2 = [
        '/images/carousel/section-2/image1.jpg',
        '/images/carousel/section-2/image2.jpg',
        '/images/carousel/section-2/image3.jpg',
        '/images/carousel/section-2/image4.jpg',
        '/images/carousel/section-2/image5.jpg',
        '/images/carousel/section-2/image6.jpg',
        '/images/carousel/section-2/image7.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='pt-[var(--section-padding)] pb-[var(--section-padding)]'>
            <div className='container-custom'>
                <div className='row-title flex justify-center w-full'>
                    <div className='styled-col items-center justify-center'>
                        <div className='text-center'>
                            <div className='ornament'>
                            <img src="/images/symbols/section-symbol.svg" alt="" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='col-row-title'>
                                <h2>Tropical, local and good</h2>
                            </div>
                        </div>
                        <div className='text-center max-w-[35em]'>
                            <p>We use organic ingredients wherever possible. Many things we grow ourselves. Herbs and salads from our market garden. Honey from the Damai bees. Poultry, eggs and fresh coconut oil from our village. Fish from the local fishermen. Very few imports, always of the best quality we can find.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full relative'>
                <div className='md:flex md:flex-row flex flex-col w-full gap-[var(--container-padding)]'>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 1 Image ${index + 1}`}
                                    className='carousel-image'
                                />
                            ))}
                        </div>
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images2.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 2 Image ${index + 1}`}
                                    className='carousel-image'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
