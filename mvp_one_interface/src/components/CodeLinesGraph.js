import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import configData from "../config.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
      legend: {
          display: false,
      },
    title: {
        display: true,
        text: 'Gazes per Line',
        },
    },
}

const labels = Array(20).fill().map((_, idx) => 'Line ' + idx);
const mockData = Array(20).fill().map((_, idx) => Math.floor(Math.random() * 10));

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: mockData,
      borderColor: configData.THEME_COLORS.PRIMARY_RGB,
      backgroundColor: configData.THEME_COLORS.PRIMARY_BG_RGB,
    },
  ],
};


const CodeLinesGraph = () => {
    return (<Bar options={options} data={data} />)
  }
  
export default CodeLinesGraph