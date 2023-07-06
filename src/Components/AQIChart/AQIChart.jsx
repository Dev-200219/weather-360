import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './AQIChart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function AQIChart({ AQIData }) {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['Carbon Monoxide', 'Ozone', 'Nitrogen Dioxide', 'Sulphur Dioxide', 'PM2.5', 'PM10'];
    const labelData = [];

    for (let key in AQIData) {
        labelData.push(AQIData[key]);
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Air Quality',
                data: labelData,
                backgroundColor: '#CBE8EA',
            },
        ],
    };
    return (
        <div className='chart-container'>
            <div className="details">
                <span className='primary chart-title'>Air Quality</span>
                <span className='primary index-title'>AQI Index: {AQIData["us-epa-index"]}</span>
            </div>
            <Bar options={options} data={data} />
        </div>
    )
}

export default AQIChart