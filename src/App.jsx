import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './page/Dashboard'
import Appoinment from './page/Appoinment'
import Patients from './page/Patients'
import Doctors from './page/Doctors'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { darkMode } = useTheme()

  // Sidebar open state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className={`${darkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-black"} min-h-screen`}>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar */}
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className={`transition-all duration-300
          pt-16           /* Navbar height */
          md:ml-64        /* Desktop sidebar width */
          px-4 md:px-10   /* Responsive padding */
        `}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appoinments" element={<Appoinment />} />
          <Route path="/Patients" element={<Patients />} />
          <Route path="/Doctors" element={<Doctors />} />
        </Routes>
      </div>

    </div>
  )
}

export default App