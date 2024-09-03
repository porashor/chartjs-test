import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, LineController, BarController);
const MixJS = () => {
    const data = {
        labels: ["jan", "feb", "mar", "apr"],
        datasets: [
            {
                label: "user data ",
                type: "bar",
                backgroundColor: "#aa0",
                data: [2.1, 4, 5, 2]
            },{
                label: "user fact",
                type: "line",
                backgroundColor: "#0a9",
                data: [2.1, 4, 5, 2]
            }
        ]
    }
  return (
    <div className='w-[50%]'>
      <Chart data={data} type='bar'/>
    </div>
  )
}

export default MixJS
