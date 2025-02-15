import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

// Stable data for January 2024
const dailyLabels = Array.from({ length: 31 }, (_, i) => `Jan ${i + 1}`);

const dailyUsageData = [
  2.5, 3.1, 2.8, 4.2, 3.9, 4.5, 4.8,
  3.2, 2.9, 3.5, 3.8, 4.1, 3.7, 3.4,
  2.7, 3.3, 4.3, 4.6, 3.9, 3.6, 3.2,
  2.8, 3.1, 3.5, 3.8, 4.2, 4.5, 4.1,
  3.7, 3.4, 3.2
];

// Updated hourly usage data with reduced peak hours (8-10)
const hourlyUsageData = [
  1.2, 0.8, 0.5, 0.3, 0.2, 0.4,
  0.9, 2.1, 2.8, 2.5, 2.2, 2.0,
  1.8, 1.5, 1.8, 2.1, 2.6, 3.2,
  3.5, 2.9, 2.2, 1.6, 1.1, 0.5
];

export function LineChart() {
  const data = {
    labels: dailyLabels,
    datasets: [
      {
        label: 'Daily Data Usage (GB)',
        data: dailyUsageData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line options={options} data={data} />;
}

export function PieChart() {
  const data = {
    labels: ['Streaming', 'Social Media', 'Gaming', 'Browsing', 'Others'],
    datasets: [
      {
        data: [40, 25, 15, 12, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export function TopAppsChart() {
  const data = {
    labels: ['Netflix', 'YouTube', 'Instagram', 'Facebook', 'Spotify', 'Twitter', 'Snapchat'],
    datasets: [
      {
        label: 'Data Usage (GB)',
        data: [25, 20, 15, 12, 8, 6, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(201, 203, 207, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(255, 159, 64)',
          'rgb(201, 203, 207)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar options={options} data={data} />;
}

export function NetworkUsageChart() {
  const data = {
    labels: dailyLabels,
    datasets: [
      {
        label: 'Mobile Data (GB)',
        data: [
          1.2, 1.5, 1.0, 1.8, 1.6, 1.9, 2.0,
          1.3, 1.1, 1.4, 1.6, 1.7, 1.5, 1.4,
          1.0, 1.3, 1.8, 2.0, 1.6, 1.5, 1.3,
          1.1, 1.2, 1.4, 1.6, 1.8, 1.9, 1.7,
          1.5, 1.4, 1.3
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'WiFi (GB)',
        data: [
          2.2, 2.6, 2.0, 3.0, 2.8, 3.2, 3.4,
          2.3, 2.0, 2.5, 2.7, 2.9, 2.6, 2.4,
          1.9, 2.4, 3.1, 3.3, 2.8, 2.6, 2.3,
          2.0, 2.2, 2.5, 2.7, 3.0, 3.2, 2.9,
          2.6, 2.4, 2.2
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return <Bar options={options} data={data} />;
}

export function HourlyUsageChart() {
  const data = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Average Hourly Usage (GB)',
        data: hourlyUsageData,
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line options={options} data={data} />;
}

export function UsagePatternChart() {
  const data = {
    labels: ['Streaming', 'Social', 'Gaming', 'Work', 'Downloads', 'Browsing'],
    datasets: [
      {
        label: 'Morning Usage',
        data: [30, 60, 20, 80, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Evening Usage',
        data: [70, 80, 60, 30, 50, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        borderColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Radar data={data} options={options} />;
}