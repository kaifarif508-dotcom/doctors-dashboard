import React from "react";
import { useTheme } from '../context/ThemeContext'
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", patients: 40 },
  { name: "Tue", patients: 60 },
  { name: "Wed", patients: 45 },
  { name: "Thu", patients: 80 },
  { name: "Fri", patients: 50 },
  { name: "Sat", patients: 90 },
  { name: "Sun", patients: 70 },
];

const HospitalChart = () => {
  const { darkMode } = useTheme();

  const renderCustomTick = (props) => {
    const { x, y, payload } = props;
    const fillColor = darkMode ? "#FFFFFF" : "#333";

    return (
      <text x={x} y={y + 15} textAnchor="middle" fill={fillColor} fontSize={12}>
        {payload.value}
      </text>
    );
  };

  return (
    <div className={`w-full p-4 sm:p-5 shadow-md rounded-xl transition-colors duration-300 ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}`}>
      
      {/* Heading */}
      <div className='flex flex-col items-center justify-between mb-4 sm:flex-row'>
        <h2 className="mb-2 text-lg font-semibold text-center sm:text-xl sm:text-left sm:mb-0">
          Analytics Overview
        </h2>
        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Weekly
        </p>
      </div>

      {/* Responsive Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={darkMode ? "#333" : "#e0e0e0"}
          />

          <XAxis
            dataKey="name"
            tick={renderCustomTick}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#2A2A3A" : "#fff",
              borderRadius: "8px",
              border: "none",
              color: darkMode ? "#fff" : "#000",
            }}
          />

          <Area
            type="monotone"
            dataKey="patients"
            stroke="#4FD1C5"
            strokeWidth={3}
            fill="url(#colorPatients)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalChart;