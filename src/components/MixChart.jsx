import React from 'react';
import Chart from 'react-apexcharts';

const MixedChart = () => {
  const options = {
    chart: {
      type: 'line',
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: 'Mixed Chart Example',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    yaxis: [
      {
        title: {
          text: 'Bar',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Line',
        },
      },
    ],
  };

  const series = [
    {
      name: 'Bar',
      type: 'column',
      data: [23, 11, 22, 27],
    },
    {
      name: 'Line',
      type: 'line',
      data: [30, 40, 35, 50],
    },
  ];

  return <Chart options={options} series={series} type='line' height={350} />;
};

export default MixedChart;
