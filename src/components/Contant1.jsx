import React from 'react'
import { IoPeople } from "react-icons/io5";
import { TbCurrencyDollar } from "react-icons/tb";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useTheme } from '../context/ThemeContext'

const Contant1 = () => {
  const { darkMode } = useTheme();

  const cardData = [
    { title: "Patients", value: "666", icon: <IoPeople /> },
    { title: "Income", value: "$2,560", icon: <TbCurrencyDollar /> },
    { title: "Appointments", value: "256", icon: <MdOutlineBusinessCenter /> },
    { title: "Treatments", value: "403", icon: <CiHeart /> },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`
            flex items-center justify-between p-5 md:p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[100px]
            ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}
          `}
        >
          {/* Left: Text */}
          <div>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} md:text-xs text-sm`}>
              {item.title}
            </p>
            <h2 className="text-xl font-semibold md:text-md">{item.value}</h2>
          </div>

          {/* Right: Icon */}
          <div className={`
            p-3 rounded-xl text-2xl flex items-center justify-center md:text-lg
            ${darkMode ? "bg-[#33333F]" : "bg-[#F3F4F6]"}
          `}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contant1