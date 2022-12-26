import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Feb",
    Expenses: 40,
    Income: 24,
    amt: 24,
  },
  {
    name: "Apr",
    Expenses: 30,
    Income: 13,
    amt: 22,
  },
  {
    name: "Jun",
    Expenses: 20,
    Income: 98,
    amt: 22,
  },
  {
    name: "Aug",
    Expenses: 27,
    Income: 39,
    amt: 20,
  },
  {
    name: "Oct",
    Expenses: 18,
    Income: 48,
    amt: 21,
  },
  {
    name: "Dec",
    Expenses: 23,
    Income: 38,
    amt: 25,
  },
 
];

export default function Barchart() {
  return (
    <BarChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 2,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Income" fill="#80ea08" />
      <Bar dataKey="Expenses" barSize={10} fill="#226afa" />
    </BarChart>
  );
}
