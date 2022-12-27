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
   maintainAspectRatio: false,
   scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }
   },
  plugins: {
  legend: {
      position: 'bottom',
    },
    
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apri', 'May', 'June', 'July','Aug','Sept','Oct'];

export const data = {

  labels,
  datasets: [
    {
      fill: true,
      label: 'Inpatient',
      data: [15,13,7,9,21,18,15,19,18,20],
      borderColor: '#89FF49',
      backgroundColor: 'rgba(0, 195, 0, 0.21)',
    },
    {
     fill: true,
     label: 'Swing Bed',
     data: [20,11,6,9,12,8,8,12,11,7],
     borderColor: '#11C3FF',
     backgroundColor: 'rgba(0, 230, 255, 0.8)',
   },
    {
     fill: true,
     label: 'Observation',
     data: [1,0,3,3,4,3,5,3,3,3],
     borderColor: '#FF1F21',
     backgroundColor: 'rgba(255, 0, 0, 0.65)',
   },
   {
    fill: true,
    label: 'Emergency Room',
    data: [108,64,88,80,96,115,106,97,81,82],
    borderColor: '#FFFF49',
    backgroundColor: 'rgba(255, 255, 0, 0.51)',
  },
  {
    fill: true,
    label: 'Outpatient',
    data: [437,311,369,337,316,331,244,277,268,259],
    borderColor: '#F33DFF',
    backgroundColor: 'rgba(233, 84, 142, 0.32)',
  },
  {
    fill: true,
    label: 'Rural Health Clinic',
    data: [320,235,265,234,218,249,104,152,122,122],
    borderColor: '#11FF59',
    backgroundColor: 'rgba(0, 230, 106, 0.8)'
  },
  ],
};

export default function HospitalChart() {
  return (
     <div className="relative m-auto md:w-[50vw] ">
          <Line height={400} options={options} data={data} />
     </div>
     
  )
  
}