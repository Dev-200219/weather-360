import React, { useEffect, useState } from 'react'
import './NewsCard.css'
import axios from 'axios';

function NewsCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: 'weather AND india', lang: 'en', sort_by: 'relevancy', page: '1', countries: 'IN' },
            headers: {
                'x-api-key': 'N85yIwJCFUyBlWscc_5ZKB2a7C-mXXzicRUrATUKkXA'
            }
        };

        axios.request(options).then((res) => {
            console.log(res.data.articles);
            setData(res.data.articles);
        })
    }, [])

    return (
        <div>NewsCard</div>
    )
}

export default NewsCard