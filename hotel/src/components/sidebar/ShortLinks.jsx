import React from 'react'

const ShortLinks = () => {
    return (
        <>
            <div className='short-links-container'>
                <div className='short-links-column'>
                    <div className='column-title'><span className='eyebrow small'>stay</span></div>
                    <ul className='short-links-list'>
                        {["Garden villa", "Pool Studio", "Pool villa", "Master Pool Villa"].map((item, index) => (
                            <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                        ))}
                    </ul>
                </div>
                <div className='short-links-column'>
                    <div className='column-title'><span className='eyebrow small'>discover</span></div>
                    <ul className='short-links-list'>
                        {["Secret Waterfall", "Dolphins of Lovina", "Diving and Snorkeling"].map((item, index) => (
                            <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ShortLinks

