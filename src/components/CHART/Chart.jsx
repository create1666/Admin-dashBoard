import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({title,  dataKey, data, grid}) => {

  return (
    <div className="chart">
      <h3 className="chartTItle">{title}</h3>
      <ResponsiveContainer width="90%" aspect={3 / 1}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
        >
         {grid &&  <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
