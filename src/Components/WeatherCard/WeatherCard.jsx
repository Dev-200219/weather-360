import React, { useEffect, useState } from 'react'
import './WeatherCard.css'
import axios from 'axios';
import moment from 'moment';
import { useMediaQuery } from '@mui/material';

function WeatherCard({ location, unit, setAQIData, setAstroData, setForecastData }) {
    const [data, setData] = useState({});
    const isMobile = useMediaQuery('(max-width:900px)')

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=4184453e9a1449d7a7860028232606&q=${location.lat},${location.lng}&days=3&aqi=yes&alerts=no`).then(({ data }) => {
            setData(data)
            setAQIData(data?.current?.air_quality)
            setAstroData(data?.forecast?.forecastday[0].astro)
            setForecastData([data?.forecast?.forecastday[1], data?.forecast?.forecastday[2]])
        })
    }, [location])

    let currentTime = Number(moment().format().split('T')[1].split(':')[0]);
    let endTime = Math.min(currentTime + 8, 24);
    let startTime = endTime - 10;
    let hourData = data?.forecast?.forecastday[0]?.hour;
    let loc =`${data?.location?.name}, ${data.location?.region}`;

    return (
        <div className='current-day-weather-container'>
            <div className="top">
                <div className="weather-img">
                    <img src={data?.current?.condition?.icon} alt="" />
                </div>
                <div className="location">
                    <span className='primary'>{loc}</span>
                    <span className='secondary'>{data?.location?.country}</span>
                </div>
                <div className="temperature">
                    <span className="primary">{unit === 'celsius' ? data?.current?.temp_c : data?.current?.temp_f}&deg;</span>
                    <span className="secondary">Temperature</span>
                </div>
                <div className="humidity">
                    <span className="primary">{data?.current?.humidity}%</span>
                    <span className="secondary">Humidity</span>
                </div>
                <div className="wind-speed">
                    <span className="primary">{data?.current?.wind_kph}km/h</span>
                    <span className="secondary">Wind speed</span>
                </div>
            </div>
            <div className="bottom">
                {
                    hourData?.map((singleData, time) => {
                        return (
                            time >= startTime && time <= endTime ?
                                <div key={time} className="hour-data">
                                    <div className="time">{time % 12 === 0 ? 12 : (time) % 12} {time >= 12 ? 'pm' : 'am'}</div>
                                    <div className="hour-weather-img">
                                        <img src={singleData?.condition?.icon} alt="" />
                                    </div>
                                    <div className="hour-temperature">{unit === 'celsius' ? singleData?.temp_c : singleData?.temp_f}&deg;</div>
                                </div>
                                : <></>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WeatherCard