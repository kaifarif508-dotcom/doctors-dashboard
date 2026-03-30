import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ApoinmentCard = ({ img, name, age, phone, time, month }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`
        rounded-xl shadow-md p-4 flex flex-col justify-between gap-4 transition hover:shadow-lg
        ${darkMode ? "bg-[#1E293B] text-white" : "bg-white text-black"}
        w-full
        sm:min-w-[45%]    /* Small screens - 2 per row */
        md:min-w-[30%]    /* Medium screens - 3 per row */
        lg:min-w-[22%]    /* Large screens - 4 per row */
      `}
    >
      {/* Top: Profile */}
      <div className="flex items-center w-full gap-4">
        <img
          className="object-cover object-center w-12 h-12 rounded-full"
          src={img}
          alt={name}
        />
        <div className="w-full">
          <p className="text-base font-semibold sm:text-lg">{name}</p>
          <p className="text-sm text-gray-400 sm:text-md">{age}</p>
        </div>
      </div>

      {/* Middle: Contact */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-gray-500 sm:text-md">+{phone}</span>
        <button className="text-sm text-blue-500 sm:text-md hover:underline">
          Contact
        </button>
      </div>

      {/* Bottom: Time + Action */}
      <div className="flex items-center justify-between pt-3 border-t">
        <div>
          <p className="text-sm font-medium sm:text-base">{time}</p>
          <p className="text-xs text-gray-400">{month}</p>
        </div>

        <button className="px-3 py-1 text-sm font-medium text-green-600 transition bg-green-100 rounded-lg hover:bg-green-200">
          Consult
        </button>
      </div>
    </div>
  )
}

export default ApoinmentCard