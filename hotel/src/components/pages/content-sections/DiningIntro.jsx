import React from 'react'

const DiningIntro = () => {
    return (
        <section className='h-full w-full intro-section'>
            <div className='container-custom'>
                <div className='flex justify-center w-full relative'>
                    <div className='flex-custom-col items-center justify-center text-center hero-flex-gap'>
                        <div className='text-center'>
                            <span className='span-margin eyebrow primary'> Local dishes, inspired by the world
                            </span>
                        </div>
                        <div className='col-row col-row-title medium'>
                            <h2>Bali's gourmet retreat</h2>
                        </div>
                        <div className='max-w-[35em]'>
                           <p>The food at Damai is easy to enjoy. Simple brasserie dishes. Balinese classics. Tropical, local and good. Most evenings dinner is served by the poolside, by a roaring fire, under the stars, with view over the boats at sea, catching the fish for tomorrow's menu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiningIntro