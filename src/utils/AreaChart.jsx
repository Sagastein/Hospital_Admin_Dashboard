
import {
     AreaChart,
     Area,
     XAxis,
     Legend,
     YAxis,
     CartesianGrid,
     Tooltip
   } from "recharts";
   
   const data = [
     {
       name: "Page A",
       uv: 4000,
       pv: 2400,
       amt: 2400
     },
     {
       name: "Page B",
       uv: 3000,
       pv: 1398,
       amt: 2210
     },
     {
       name: "Page C",
       uv: 2000,
       pv: 9800,
       amt: 2290
     },
     {
       name: "Page D",
       uv: 2780,
       pv: 3908,
       amt: 2000
     },
     {
       name: "Page E",
       uv: 1890,
       pv: 4800,
       amt: 2181
     },
     {
       name: "Page F",
       uv: 2390,
       pv: 3800,
       amt: 2500
     },
     {
       name: "Page G",
       uv: 3490,
       pv: 4300,
       amt: 2100
     }
   ];
   
   export default function Areachart() {
     return (
       <AreaChart
         width={500}
         height={400}
         data={data}
         margin={{
           top: 10,
           right: 0,
           left: 0,
           bottom: 2,
         }}
       >
         <defs>
       <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
         <stop offset="5%" stopColor="red" stopOpacity={0.8}/>
         <stop offset="95%" stopColor="red" stopOpacity={0}/>
       </linearGradient>
       <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
         <stop offset="5%" stopColor="#82ff00" stopOpacity={0.8}/>
         <stop offset="95%" stopColor="#8ffa00" stopOpacity={0}/>
       </linearGradient>
       <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
         <stop offset="5%" stopColor="#82ffff" stopOpacity={0.8}/>
         <stop offset="95%" stopColor="#8ffff" stopOpacity={0}/>
       </linearGradient>
     </defs>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Area type="monotone" dataKey="pv" stroke="#ccff11" fill="#00ff12" />
         <Area type="monotone" dataKey="amt" stroke="#ccff1f" fill="#ff0fa0" />
         <Area type="monotoneX" dataKey="uv" stroke="#0004d8" fill="#44ddff" />
       </AreaChart>
     );
   }
   