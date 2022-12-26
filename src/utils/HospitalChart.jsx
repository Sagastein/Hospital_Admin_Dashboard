import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  
  plugins: {
    legend: {
      position: 'bottom',
    },
    
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [1,2,3,4,5,3,10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
     fill: true,
     label: 'Dataset 1',
     data: [1,43,2,1,3,10],
     borderColor: 'rgb(132, 131, 135)',
     backgroundColor: 'rgba(33, 62, 35, 0.5)',
   },
  ],
};

export default function HospitalChart() {
  return (
     <div className="w-screen md:w-full">
          <Line scale={4} height={200}  options={options} data={data} />
     </div>
     
  )
  
}