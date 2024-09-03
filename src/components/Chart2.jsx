import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'

const Chart2 = () => {
  const data = {
    labels: ["user data show", "main user ", "temporary user", "losser data", "bionic data", "simple data"],
    datasets: [
      {
        label: "user data",
        backgroundColor: "#a12",
        backgroundHoverColor: "#aa1",
        data:[12,1,3,4,6,2]
      }
    ]
  }
  const options = {
    maintainaspectratio: true,
  }
  return (
    <div className='w-[60%] '>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Chart2
