import React from 'react'
import { UserData } from '../Data/chartData'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend)
const CircleChart = () => {
    const data = {
        labels: UserData.map((item, index)=> item.year),
        datasets: [
            {
                label: "User gain",
                backgroundColor: "#a12",
                data: UserData.map((item)=>item.userGain)
            },
            {
                label: " user Loss",
                backgroundColor: "#1a9",
                data: UserData.map((item)=>item.userLoss)
            }
        ]
    }
    const options = {
        maintainaspectratio: true,
    }
  return (
    <div className='w-[40%]'>
      <Doughnut data={data} options={options}/>
    </div>
  )
}

export default CircleChart
