import React from 'react'
import './AstroData.css'

function AstroData({ astroData }) {
    return (
        <div className='astro-data-container'>
            <span className="primary">Astronomy</span>
            <div className="inner-container">
                <div className="data-box sunrise">
                    <span className='astro-heading'>Sunrise: </span>
                    <span className='astro-data'>{astroData.sunrise}</span>
                </div>
                <div className="data-box sunset">
                    <span className='astro-heading'>Sunset: </span>
                    <span className='astro-data'>{astroData.sunset}</span>
                </div>
                <div className="data-box moonrise">
                    <span className='astro-heading'>Moonrise: </span>
                    <span className='astro-data'>{astroData.moonrise}</span>
                </div>
                <div className="data-box moonset">
                    <span className='astro-heading'>Moonset: </span>
                    <span className='astro-data'>{astroData.moonset}</span>
                </div>
            </div>
        </div>
    )
}

export default AstroData