"use client"

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Gender = ({genderdata}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Demo data matching the provided chart
    const data = {
      labels: genderdata.map(item => item.group),
      datasets: [
        {
          data: genderdata.map(item => item.count), // Percentage values
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',  // Blue for Male
            'rgba(255, 99, 132, 0.6)',  // Pink for Female
            'rgba(255, 206, 86, 0.6)',  // Yellow for Other
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20,
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'Gender Distribution',
          font: {
            size: 16,
          },
          padding: {
            bottom: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context: any) {
              const label = context.label || '';
              const value = context.raw;
              const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${percentage}%`;
            }
          }
        }
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [genderdata]);

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow">
      <div style={{ height: '300px' }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Gender;