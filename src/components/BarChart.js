import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bar options='' data={chartData}  />;
}

export default BarChart;