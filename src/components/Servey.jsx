import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { FaHospitalUser } from "react-icons/fa6";
import ReportsChart from './ReportsChart';
import { useTheme } from '../context/ThemeContext'

const Servey = () => {

  const { darkMode } = useTheme();

  const surveyData = [
    {
      icon: <FaPeopleGroup />,
      value: "200",
      label: "Total Staff"
    },
    {
      icon: <IoBed />,
      value: "236",
      label: "Total Beds"
    },
    {
      icon: <FaHospitalUser />,
      value: "20",
      label: "Daily Surgery "
    }
  ];

  return (
    <div className="w-full">

      {/* Heading */}
      <h1 className="mb-3 text-lg font-semibold text-center">
        Hospital Survey
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {surveyData.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-center
              p-4 md:p-2 rounded-xl shadow-sm
              ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}
            `}
          >

            {/* Icon */}
            <div
              className={`
                p-3 rounded-xl text-2xl mb-2 md:text-lg md:my-4
                ${darkMode ? "bg-[#33333F]" : "bg-[#F3F4F6]"}
              `}
            >
              {item.icon}
            </div>

            <h1 className="text-xl font-semibold">{item.value}</h1>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm md:text-xs `}>
              {item.label}
            </p>

          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full mt-4">
        <ReportsChart />
      </div>

    </div>
  )
}

export default Servey