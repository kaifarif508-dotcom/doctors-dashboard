import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Contant2 = () => {
  const { darkMode } = useTheme()
  
  const appointmentList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687",
    name: "Beth Mccoy",
    type: "Scaling",
    status: "On Going"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500",
    name: "Devil",
    type: "Scaling",
    status: "12:00 PM"
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1666298858421-3765c17bcf80?w=500",
    name: "Harry Hurt",
    type: "Scaling",
    status: "12:00 PM"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1622920967116-fc28f193c454?q=80&w=1078",
    name: "Leire Cavia",
    type: "Scaling",
    status: "12:00 PM"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1734765288168-816e64f98f2f?q=80&w=1832",
    name: "Seema",
    type: "Medical Checkup",
    status: "2:00 PM"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500",
    name: "Ali Khan",
    type: "Dental Checkup",
    status: "3:30 PM"
  }
];

  return (
    <div className="w-full">

      {/* Heading */}
      <h2 className="mb-3 text-lg font-semibold text-center">
        Today Appointment
      </h2>

      {/* Card */}
      <div
        className={`
          rounded-xl shadow-sm px-5 py-1 flex flex-col gap-2
          ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}
        `}
      >
        
        {appointmentList.map((item) => (
          <div
            key={item.id}
            className={`
              flex items-center justify-between p-2 rounded-lg
              ${darkMode ? "hover:bg-[#2A2A3A]" : "hover:bg-gray-100"}
            `}
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={item.img}
                alt={item.name}
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-blue-500">{item.type}</p>
              </div>
            </div>

            {/* Right */}
            <span className="px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded-full">
              {item.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Contant2