import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../fetch/fetch'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({ data, country }) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchedApi = async () => {
            setDailyData(await fetchDailyData())
        }   
        fetchedApi()
    }, [] )


    const lineChart = (
        dailyData.length
        ? (
        <Line 
            data={{
                labels: dailyData.map(data => data.reportDate),
                datasets: [
                    {
                        data: dailyData.map(data => data.confirmed.total),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, 
                    {
                        data: dailyData.map(data => data.deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
            }}
        />) 
        : 
        null
    )
    
    const barChart = (
        data.confirmed
        ? (
            <Bar 
                data= {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options= {{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    )


    return (
        <div className={styles.container} >
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart