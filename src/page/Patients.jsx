import React from 'react'
import PatientsCard from './PatientsCard'
import { useTheme } from '../context/ThemeContext'

const Patients = () => {
  const { darkMode } = useTheme()

  const patientsData = [
    { id: 1, name: "Ali Khan", age: 28, bloodGroup: "A+", phone: "03001234567", location: "Karachi", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Ahmed Raza", age: 35, bloodGroup: "B+", phone: "03111234567", location: "Lahore", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Sara Ali", age: 24, bloodGroup: "O+", phone: "03211234567", location: "Islamabad", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4, name: "Ayesha Noor", age: 30, bloodGroup: "AB+", phone: "03331234567", location: "Karachi", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Usman Tariq", age: 40, bloodGroup: "A-", phone: "03451234567", location: "Multan", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Hina Malik", age: 27, bloodGroup: "B-", phone: "03061234567", location: "Faisalabad", image: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 7, name: "Bilal Ahmed", age: 33, bloodGroup: "O-", phone: "03151234567", location: "Peshawar", image: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 8, name: "Fatima Zahra", age: 22, bloodGroup: "AB-", phone: "03251234567", location: "Quetta", image: "https://randomuser.me/api/portraits/women/8.jpg" },
    { id: 9, name: "Imran Shah", age: 45, bloodGroup: "A+", phone: "03351234567", location: "Hyderabad", image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 10, name: "Zainab Khan", age: 29, bloodGroup: "B+", phone: "03461234567", location: "Sialkot", image: "https://randomuser.me/api/portraits/women/10.jpg" },
    { id: 11, name: "Saad Ali", age: 31, bloodGroup: "O+", phone: "03071234567", location: "Gujranwala", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 12, name: "Maryam Iqbal", age: 26, bloodGroup: "AB+", phone: "03171234567", location: "Rawalpindi", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: 13, name: "Hamza Sheikh", age: 38, bloodGroup: "A-", phone: "03271234567", location: "Bahawalpur", image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { id: 14, name: "Noor Fatima", age: 21, bloodGroup: "B-", phone: "03371234567", location: "Sukkur", image: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: 15, name: "Danish Raza", age: 36, bloodGroup: "O-", phone: "03471234567", location: "Larkana", image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 16, name: "Iqra Ahmed", age: 25, bloodGroup: "AB-", phone: "03081234567", location: "Karachi", image: "https://randomuser.me/api/portraits/women/16.jpg" },
  ];

  return (
    <div className={`w-full min-h-screen px-2 py-4 text-center  ${
      darkMode ? "bg-[#121212] text-white" : "bg-[#F6F7FB] text-black"
    }`}>

      {/* Heading */}
      <h1 className="mb-2 text-center lg:mb-6 :font-semibold md:text-center sm:text-xl lg:text-left md:text-2xl">
        Patients
      </h1>

      {/* Flex Layout */}
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {patientsData.map((patient) => (
          <div
            key={patient.id}
            className="
              w-full
              sm:w-[48%]
              md:w-[35%]
              lg:w-[24%]
            "
          >
            <PatientsCard {...patient} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Patients