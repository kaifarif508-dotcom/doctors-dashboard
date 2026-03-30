import React from 'react'
import ApoinmentCard from './ApoinmentCard'
import { useTheme } from '../context/ThemeContext'

const Appoinment = () => {
  const { darkMode } = useTheme()

  const appointmentsData = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687',
      name: "Kiran Acharya",
      age: "27 yrs, Male",
      phone: "92 1376397502",
      time: "06:00 PM",
      month: "2 Feb 2025"
    },
    {
      id: 2,
      img:'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500',
      name: "Chupra",
      age: "30 yrs, Female",
      phone: "92 2085736300",
      time: "06:15 PM",
      month: "2 Feb 2025"
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=627',
      name: "Rahul",
      age: "35 yrs, Male",
      phone: "92 1834979903",
      time: "06:30 PM",
      month: "2 Feb 2025"
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500',
      name: "Frestocks",
      age: "32 yrs, Female",
      phone: "92 1649230643",
      time: "06:45 PM",
      month: "2 Feb 2025"
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500',
      name: "Alexa",
      age: "28 yrs, Female",
      phone: "92 2247689762",
      time: "07:00 PM",
      month: "2 Feb 2025"
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=687',
      name: "Jakob Owns",
      age: "39 yrs, Male",
      phone: "92 1438900029",
      time: "07:15 PM",
      month: "2 Feb 2025"
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
      name: "William",
      age: "29 yrs, Male",
      phone: "92 2087465373",
      time: "07:30 PM",
      month: "2 Feb 2025"
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=500',
      name: "Clarisse",
      age: "37 yrs, Female",
      phone: "92 1257745373",
      time: "07:45 PM",
      month: "2 Feb 2025"
    },
    {
      id: 9,
      img: 'https://plus.unsplash.com/premium_photo-1664476788423-7899ac87bd7f?w=500',
      name: "Bravo",
      age: "29 yrs, Male",
      phone: "92 1456654373",
      time: "08:00 PM",
      month: "2 Feb 2025"
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500',
      name: "Gregory",
      age: "27 yrs, Male",
      phone: "92 2387863573",
      time: "08:15 PM",
      month: "2 Feb 2025"
    },
    {
      id: 11,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      name: "Jhoseph",
      age: "33 yrs, Male",
      phone: "92 1866335340",
      time: "08:30 PM",
      month: "2 Feb 2025"
    },
    {
      id: 12,
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500',
      name: "Jack Nacos",
      age: "38 yrs, Female",
      phone: "92 3456235690",
      time: "08:45 PM",
      month: "2 Feb 2025"
    }
  ];

  return (
    <div className={` min-h-screen  px-5 w-fit ${
      darkMode ? "bg-[#121212] text-white" : "bg-[#F6F7FB]"
    } `}>

      {/* Heading */}
      <h1 className="mb-4 text-xl font-semibold text-center lg:text-left">
        Appointments
      </h1>

      {/* Flex Layout */}
      <div className="flex flex-wrap w-full gap-5">
        {appointmentsData.map((item) => (
          <ApoinmentCard
            key={item.id}   // ✅ fix
            img={item.img}
            name={item.name}
            age={item.age}
            phone={item.phone}
            time={item.time}
            month={item.month}
          />
        ))}
      </div>

    </div>
  )
}

export default Appoinment