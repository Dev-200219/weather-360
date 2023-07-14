import React from 'react'
import './Forecast.css'
import moment from 'moment';

function Forecast({ forecastData, unit }) {
    let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let day1 = forecastData[0]?.date.split('-')[2];
    let day2 = forecastData[1]?.date.split('-')[2];
    let month1 = months[Number(forecastData[0]?.date.split('-')[1])];
    let month2 = months[Number(forecastData[1]?.date.split('-')[1])];
    let currentDay = moment().format('LLLL').split(' ')[0];
    currentDay = days.indexOf(currentDay.substring(0, 3));
    let nextDay = days[(currentDay + 1) % 7];
    let nextNextDay = days[(currentDay + 2) % 7];

    return (
        <div className='forecast-data-container'>
            <div className="forecast-title-container">
                <span className="primary">Forecasts</span>
                <span className='secondary'>Stay informed about the weather conditions in your location. Check out the forecast here.</span>
            </div>
            <div className="future-data-container">
                <div className="future-data">
                    <div className="img-container">
                        <img style={{ marginTop: '10px' }} height='50px' width='50px' src={forecastData[0]?.day?.condition?.icon} alt="" />
                    </div>
                    <div className="temperature-container">
                        <span className='max-temp'>{unit === 'celsius' ? forecastData[0]?.day?.maxtemp_c : forecastData[0]?.day?.maxtemp_f}&deg;</span>
                        <span className='min-temp'>/{unit === 'celsius' ? forecastData[0]?.day?.mintemp_c : forecastData[0]?.day?.mintemp_f}&deg;</span>
                    </div>
                    <div className="forecast-date-container">
                        <span className="forecast-date">{day1}</span>
                        <span className="month">{month1}, </span>
                        <span className="day">{nextDay}</span>
                    </div>
                </div>
                <div className="future-data">
                    <div className="img-container">
                        <img style={{ marginTop: '10px' }} height='50px' width='50px' src={forecastData[1]?.day?.condition?.icon} alt="" />
                    </div>
                    <div className="temperature-container">
                        <span className='max-temp'>{unit === 'celsius' ? forecastData[1]?.day?.maxtemp_c : forecastData[1]?.day?.maxtemp_f}&deg;</span>
                        <span className='min-temp'>/{unit === 'celsius' ? forecastData[1]?.day?.mintemp_c : forecastData[1]?.day?.mintemp_f}&deg;</span>
                    </div>
                    <div className="forecast-date-container">
                        <span className="forecast-date">{day2}</span>
                        <span className="month">{month2}, </span>
                        <span className="day">{nextNextDay}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast