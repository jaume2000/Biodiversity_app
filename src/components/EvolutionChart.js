import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  LineElement,
  CategoryScale, // Para ejes de tipo 'category'
  LinearScale,   // Para ejes de tipo 'linear'
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Datos aleatorios para la gráfica
const randomData = () => {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
};

// Opciones para la gráfica
const options = {
  responsive: true,
  maintainAspectRatio: false, // Permite ajustar el tamaño del gráfico sin mantener la relación de aspecto
  scales: {
    x: {
      type: 'category',
      display: true,
      title: {
        display: true,
        text: 'Time (Days)',
      },
    },
    y: {
      type: 'linear',
      display: true,
      title: {
        display: true,
        text: 'CO2 Levels (ppm)',
      },
    },
  },
};

const EvolutionChart = () => {
  // Datos de la gráfica
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
    datasets: [
      {
        label: 'CO2 Levels',
        data: randomData(), // Datos aleatorios para los niveles de CO2
        borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color del área bajo la línea
        fill: true, // Rellena el área bajo la línea
        tension: 0.4, // Hace la línea más suave
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">CO2 Evolution</h2>
      <div className="chart-container mt-4" style={{ height: '400px' }}> {/* Ajusta la altura aquí */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EvolutionChart;
