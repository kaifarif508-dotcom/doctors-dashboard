import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contant1 from '../components/Contant1';
import Contant2 from '../components/Contant2';
import Servey from '../components/Servey';
import HospitalChart from '../components/HospitalChart'
import { useTheme } from '../context/ThemeContext'

const Dashboard = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        w-full 
        min-h-screen
        ${darkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-black"}
        
                /* sidebar space */
               /* navbar height space */
         md:p-6
      `}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Top Cards */}
              <div>
                
              <Contant1 />
              </div>

              {/* Middle Section */}
              <div className="flex flex-col gap-4 mt-5 lg:flex-row">
                
                  <Contant2 />
                

                
                  <Servey />
                
              </div>

              {/* Chart */}
              <div className="w-full mt-6">
                <HospitalChart />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default Dashboard;