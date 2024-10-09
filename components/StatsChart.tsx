"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatsChart = () => {
  const data = [
    { name: 'Equipo A', victorias: 4, derrotas: 1 },
    { name: 'Equipo B', victorias: 3, derrotas: 2 },
    { name: 'Equipo C', victorias: 2, derrotas: 3 },
    { name: 'Equipo D', victorias: 1, derrotas: 4 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="victorias" fill="#990000" />
        <Bar dataKey="derrotas" fill="#cccccc" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatsChart;