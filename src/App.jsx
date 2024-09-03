import React from 'react'
import Chart2 from './components/Chart2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import CircleChart from './components/CircleChart';
import LineChar from './components/LineChar';
import MixChart from './components/MixChart';
import MixJS from './components/MixJS';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const App = () => {
  return (
    <div>
      <Chart2/>
      <CircleChart/>
      <LineChar/>
      <MixChart/>
      <MixJS/>
    </div>
  )
}

export default App
