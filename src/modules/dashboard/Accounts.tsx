"use client"

import { useState, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Accounts = ({accountData}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Demo data matching the provided chart
    // const accountData = [
    //   { type: 'Creator', count: 2400, percentage: 40 },
    //   { type: 'Business', count: 1800, percentage: 30 },
    //   { type: 'Agency', count: 1200, percentage: 20 },
    //   { type: 'Admin', count: 600, percentage: 10 },
    // ];

    const data = {
      labels: accountData.map(item => item.type),
      datasets: [
        {
          label: 'Accounts',
          data: accountData.map(item => item.count),
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
          barThickness: 30, // Fixed width for all bars
        },
      ],
    };

    const options = {
      indexAxis: 'y' as const,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Account Types',
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
              const label = context.dataset.label || '';
              const value = context.raw;
              const percentage = accountData[context.dataIndex].percentage;
              return [`${label}: ${value}`, `Percentage: ${percentage}%`];
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 500,
          }
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [accountData]);

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow">
      <div style={{ height: '300px' }}>
        <Bar options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default Accounts;