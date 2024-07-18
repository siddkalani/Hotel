import React from 'react'
import { Parallax } from 'react-parallax';

const ReservationSection = () => {
    return (
        <>
            <section className='w-full h-full'>
                <div className='flex-custom-center h-full w-full'>
                    <Parallax
                        strength={200}
                        bgImage="https://www.thedamai.com/media/pages/dining/16935f89f6-1703335808/sunsetsceneedit-vignettetight-2880x-q72.jpg"
                        bgImageAlt="Poolside table"
                        bgImageStyle={{ objectFit: "cover" }}
                    >
                        <div style={{ height: '90vh' }} className='hero-image flex-custom-center'>
                            {/* <div className='flex-custom-center w-full h-full'>
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
                            </div> */}
                        </div>
                    </Parallax>
                </div>

                {/* footer img */}
                <div className='w-full h-full flex-custom-center hero-margin md:hero-margin-large'>
                    <picture className='card-width md:card-width-large h-full'>
                        <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1]" src="https://www.thedamai.com/media/pages/dining/bcb8635e31-1703335793/eveningdrink2x-540x720-crop-q72.jpg" />
                    </picture>
                </div>
            </section>
            <section className='h-full w-full intro-section'>
                <div className='container-custom'>
                    <div className='flex justify-center w-full relative'>
                        <div className='flex-custom-col items-center justify-center text-center hero-flex-gap'>
                            {/* <div className='text-center'>
                            <span className='span-margin eyebrow primary'> Local dishes, inspired by the world
                            </span>
                        </div> */}
                            <div className='col-row col-row-title medium'>
                                <h2>The Damai Bar</h2>
                            </div>
                            <div className='max-w-[35em]'>
                                <p>We serve playful poolside cocktails, as you watch the sun set behind a distant volcano. And classic after dinner drinks, by the bonfires, under the stars.</p>
                            </div>
                            <div className={`btn w-15 btn-svg border-[0.5px] border-black bg-[var(--color-primary)] h-[3rem]`}>
                                <div className='btn-content gap-2'>
                                    <span className='text-white'>Make a reservation</span>
                                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.049,4.907A9.91,9.91,0,0,0,3.456,16.864L2.049,22,7.3,20.621a9.91,9.91,0,0,0,4.734,1.208h0A9.912,9.912,0,0,0,19.048,4.908Zm-7.008,15.25a8.221,8.221,0,0,1-4.195-1.15l-.3-.18-3.118.817.833-3.039-.195-.312a8.239,8.239,0,1,1,15.215-4.38,8.255,8.255,0,0,1-8.24,8.243Zm4.516-6.172c-.246-.125-1.465-.722-1.692-.8s-.391-.125-.559.125-.64.8-.785.973-.288.187-.535.062a6.8,6.8,0,0,1-1.992-1.23A7.547,7.547,0,0,1,9.616,11.4c-.145-.246-.016-.382.11-.5s.246-.289.371-.434a1.645,1.645,0,0,0,.247-.414.458.458,0,0,0-.02-.434c-.063-.125-.559-1.344-.762-1.84S9.156,7.352,9,7.344s-.31-.008-.473-.008a.917.917,0,0,0-.66.309A2.78,2.78,0,0,0,7,9.712a4.819,4.819,0,0,0,1.011,2.562,11.046,11.046,0,0,0,4.23,3.739c.59.254,1.051.406,1.41.524a3.421,3.421,0,0,0,1.559.1,2.548,2.548,0,0,0,1.672-1.176,2.061,2.061,0,0,0,.145-1.176c-.058-.111-.222-.171-.472-.3Z" fill='white' fill-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationSection