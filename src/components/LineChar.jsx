import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserData } from '../Data/chartData';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);





const LineChar = () => {
    const data = {
        labels: UserData.map((item)=>item.year),
        datasets: [
            {
                label: "userGain",
                data: UserData.map((item)=>item.userGain),
                backgroundColor: "red"
            },
            {
                label: "userLoss",
                data: UserData.map((item)=>item.userLoss),
                backgroundColor: "blue"
            },
        ]
    }
    const options = {
        maintainaspectratio: true
    }
  return (
    <div className='w-[60%]'>
      <Line data={data} options={options}/>
    </div>
  )
}

export default LineChar
