import React from "react";
import { useTheme } from '../context/ThemeContext'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 60 },
  { name: "May", value: 40 },
  { name: "Jun", value: 70 },
];

const ReportsChart = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        w-full p-4 rounded-xl shadow-sm
        ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}
      `}
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Reports</h3>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
          Last 6 months
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis
              dataKey="name"
              stroke={darkMode ? "#9CA3AF" : "#6B7280"}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1E1E2A" : "#fff",
                border: "none",
                borderRadius: "8px",
                color: darkMode ? "#fff" : "#000"
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ReportsChart;