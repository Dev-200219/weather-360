import React, { useState } from 'react'
import './Header.css'
import { Avatar, List, ListItem } from '@mui/material'
import moment from 'moment/moment'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function Header({setLocation}) {
    const [unit, setUnit] = useState('celsius');
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(null);

    let date = moment().format('LLLL').split(' ');
    date[date.length - 2] = '';
    date[date.length - 1] = '';
    date = date.join(' ');

    const debounce = (apiCall, delay) => {
        let timerID;

        return (location) => {
            setOptions([]);
            clearTimeout(timerID)
            timerID = setTimeout(async () => {
                await apiCall(location);
            }, delay)
        }
    }

    const apiCall = async (location) => {
        if (!location) {
            setOptions(null);
            return;
        };

        setLoading(true);
        let { data } = await axios.get(`https://api.weatherapi.com/v1/search.json?key=4184453e9a1449d7a7860028232606&q=${location}`);
        setLoading(false);
        setOptions(data);
    }

    const chooseLocation = (location) => {
        setOptions(null)
        setLocation({lat : location.lat, lng : location.lon});
    }

    const optFn = debounce(apiCall, 200);
    return (
        <div className='header-container'>
            <div className="left">
                <div className="user-img">
                    <Avatar
                        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    />
                </div>
                <div className="date-container">
                    <p className='message'>Hi, Dev</p>
                    <p className='date'>{date}</p>
                </div>
            </div>
            <div className="right">
                <div className="search-bar">
                    <SearchIcon />
                    <input type="text" placeholder='Search City' onChange={(e) => {
                        optFn(e.currentTarget.value);
                    }} />
                    <div className="options-container">
                        {
                            options ?
                                <List className='location-list'>
                                    {
                                        loading ? <ListItem>Loading..</ListItem> :
                                            options?.length == 0 ? <ListItem>No Locations</ListItem> :
                                                options?.map((location) => {
                                                    return (
                                                        <ListItem onClick={() => chooseLocation(location)} key={location.name} className='hover-effect'>{`${location.name}, ${location.region}`}</ListItem>
                                                    )
                                                })
                                    }
                                </List> : <></>
                        }
                    </div>
                </div>
                <div className="temp-unit-container">
                    <div className={`slider ${unit === 'celsius' ? 'move-left' : 'move-right'}`}></div>
                    <span className='celsius' onClick={() => setUnit('celsius')}>C&deg;</span>
                    <span className='fahreneit' onClick={() => setUnit('fahreneit')}>F&deg;</span>
                </div>
            </div>
        </div>
    )
}

export default Header