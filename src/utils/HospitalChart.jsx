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

const labels = ['Jan', 'Feb', 'Mar', 'Apri', 'May', 'June', 'July','Aug','Sept','Oct'];

export const data = {

  labels,
  datasets: [
    {
      fill: true,
      label: 'Inpatient',
      data: [15,13,7,9,21,18,15,19,18,20],
      borderColor: 'rgb(32, 12, 235)',
      backgroundColor: 'rgba(0, 255, 0, 0.86)',
    },
    {
     fill: true,
     label: 'Swing Bed',
     data: [20,11,6,9,12,8,8,12,11,7],
     borderColor: 'rgba(0, 0, 255, 0.62)',
     backgroundColor: 'rgba(0, 0, 255, 0.80)',
   },
    {
     fill: true,
     label: 'Observation',
     data: [1,0,3,3,4,3,5,3,3,3],
     borderColor: 'rgb(12, 31, 335)',
     backgroundColor: 'rgba(255, 0, 0, 0.75)',
   },
   {
    fill: true,
    label: 'Emergency Room',
    data: [108,64,88,80,96,115,106,97,81,82],
    borderColor: 'rgb(112, 231, 35)',
    backgroundColor: 'rgba(255, 255, 0, 0.61)',
  },
  {
    fill: true,
    label: 'Outpatient',
    data: [437,311,369,337,316,331,244,277,268,259],
    borderColor: 'rgb(12, 39, 34)',
    backgroundColor: 'rgba(233, 84, 142, 0.32)',
  },
  {
    fill: true,
    label: 'Rural Health Clinic',
    data: [320,235,265,234,218,249,104,152,122,122],
    borderColor: 'rgb(121, 229, 34)',
    backgroundColor: 'rgba(233, 254, 8, 0.43)'
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