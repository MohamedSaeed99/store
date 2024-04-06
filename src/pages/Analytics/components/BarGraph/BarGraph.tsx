"use client";

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
      "name": "Page A",
      "pv": 2400
    },
    {
      "name": "Page B",
      "pv": 1398
    },
    {
      "name": "Page C",
      "pv": 9800
    },
    {
      "name": "Page D",
      "pv": 3908
    },
    {
      "name": "Page E",
      "pv": 4800
    },
    {
      "name": "Page F",
      "pv": 3800
    },
    {
      "name": "Page G",
      "pv": 4300
    }
]
  
const BarGraph = () => {
    const width = 400;
    const height = 200;

    return (
        <div className="flex justify-center w-1/3">
            <BarChart width={width} height={height} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
        </div>
    )
}

export default BarGraph;