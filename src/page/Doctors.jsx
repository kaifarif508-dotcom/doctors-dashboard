import React from 'react'
import { useTheme } from '../context/ThemeContext'
import DoctorCard from './DoctorCard'

const Doctors = () => {
  const { darkMode } = useTheme()

  const doctorsData = [
    { id: 1, name: "Dr. Ahmed Khan", image: "https://randomuser.me/api/portraits/men/1.jpg", field: "Cardiologist", location: "Karachi", subtitle: "Heart Specialist with 10 years experience" },
    { id: 2, name: "Dr. Sara Ali", image: "https://randomuser.me/api/portraits/women/2.jpg", field: "Dermatologist", location: "Lahore", subtitle: "Skin care expert" },
    { id: 3, name: "Dr. Usman Tariq", image: "https://randomuser.me/api/portraits/men/3.jpg", field: "Neurologist", location: "Islamabad", subtitle: "Brain & nerve specialist" },
    { id: 4, name: "Dr. Hina Shah", image: "https://randomuser.me/api/portraits/women/4.jpg", field: "Pediatrician", location: "Karachi", subtitle: "Child health specialist" },
    { id: 5, name: "Dr. Bilal Ahmed", image: "https://randomuser.me/api/portraits/men/5.jpg", field: "Orthopedic", location: "Lahore", subtitle: "Bone & joint expert" },
    { id: 6, name: "Dr. Ayesha Noor", image: "https://randomuser.me/api/portraits/women/6.jpg", field: "Gynecologist", location: "Multan", subtitle: "Women health specialist" },
    { id: 7, name: "Dr. Hamza Malik", image: "https://randomuser.me/api/portraits/men/7.jpg", field: "ENT Specialist", location: "Faisalabad", subtitle: "Ear, nose & throat expert" },
    { id: 8, name: "Dr. Fatima Zahra", image: "https://randomuser.me/api/portraits/women/8.jpg", field: "Dentist", location: "Karachi", subtitle: "Smile & dental care expert" }
  ]

  return (
    <div className={`w-full min-h-screen px-5 py-4 ${darkMode ? "bg-[#121212] text-white" : "bg-[#F6F7FB] text-black"}`}>
      
      {/* Heading */}
      <h1 className="mb-6 text-xl font-semibold text-center lg:text-center lg:text-xl ">Doctors</h1>

      {/* Flex Layout */}
    <div className="flex flex-wrap mx-2 md:justify-between lg:justify-center lg:text-center lg:gap-10">
        {doctorsData.map((doctor) => (
          <div
            key={doctor.id}
            className="w-full px-2 mb-4 lg:px-4 sm:w-1/3 md:w-[48%] lg:w-1/4"
          >
            <DoctorCard
              name={doctor.name}
              location={doctor.location}
              field={doctor.field}
              title={doctor.subtitle}
              image={doctor.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors