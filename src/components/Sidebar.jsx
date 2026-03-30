import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineBusinessCenter, MdOutlineMessage, MdOutlinePayment } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <RxDashboard />, label: 'Dashboard', path: '/' },
    { icon: <MdOutlineBusinessCenter />, label: 'Appointments', path: '/appoinments' },
    { icon: <MdOutlineMessage />, label: 'Doctors', path: '/Doctors' },
    { icon: <FaPeopleGroup />, label: 'Patients', path: '/Patients' },
    { icon: <MdOutlinePayment />, label: 'Payment Info', path: '/Payment' },
    { icon: <IoSettingsSharp />, label: 'Setting', path: '/Settings' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex lg:w-64  h-screen bg-[#383C9F] text-white fixed left-0 top-0 flex-col z-50">
        <div className='text-center py-6 border-b border-[#5559c9]'>
          <h1 className='text-xl font-semibold lg:text-2xl'>Medicare</h1>
        </div>
        <div className='flex flex-col gap-6 p-5'>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className='flex items-center gap-3 text-lg text-[#b0b3ff] hover:text-white transition'>
              <span className='text-2xl'>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden flex transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className='w-64 h-full bg-[#383C9F] text-white flex flex-col p-2'>
          {/* Close button */}
          <div className='flex justify-end'>
            <button onClick={toggleSidebar}>
              <span className='text-2xl'>×</span>
            </button>
          </div>

          {/* Logo */}
          <div className='text-center py-6 border-b border-[#5559c9]'>
            <h1 className='text-2xl font-semibold'>Medicare</h1>
          </div>

          {/* Menu */}
          <div className='flex flex-col gap-6 mt-4'>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={toggleSidebar}
                className='flex items-center gap-3 text-lg text-[#b0b3ff] hover:text-white transition'
              >
                <span className='text-2xl'>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className='flex-1 bg-black opacity-50' onClick={toggleSidebar}/>
      </div>
    </>
  )
}

export default Sidebar