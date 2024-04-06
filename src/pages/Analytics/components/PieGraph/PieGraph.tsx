"use client";

import { Pie, PieChart } from "recharts";

const data = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
];

const PieGraph = () => {
    const width = 400;
    const height = 200;

    return (
        <div className="flex justify-center w-1/3">
            <PieChart width={width} height={height}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </div>
    )
}

export default PieGraph;