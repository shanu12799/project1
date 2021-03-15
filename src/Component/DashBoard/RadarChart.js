import React from 'react'
import {Radar} from 'react-chartjs-2'
function RadarChart() {

    const data={
        labels: ['jan', 'feb','Mar','Apr','may'],
        datasets:[
            {
                label:'Sales for 2020 (M)',
                data:[3,2,2,1,5],
                borderColor:[
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                backgroundColor:[
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],

            }
            ,{
                label:'Sales for 2019 (M)',
                data:[1,3,2,2,3],
                borderColor:[
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                backgroundColor:[
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
            }
        ]
    }
    const options={
        title:{
            display:true,
            text:'Radar Chart'
        },
    }
    return (
        <div>
            <Radar data={data} options={options}/>
        </div>
    )
}

export default RadarChart
