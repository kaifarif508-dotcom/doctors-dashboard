import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {useTheme} from "../context/ThemeContext"

const PatientsCard = (props) => {
    const {darkMode} = useTheme()
  return (
    <div className='py-2 lg:py-4 '>

      <div className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}flex flex-col justify-between px-6 py-6 shadow-md rounded-xl`}>
        
        {/* Image + Name */}
        <div className='flex items-center gap-2 px-3'>
          <img
            className='object-cover w-10 h-10 rounded-full'
            src={props.image}
            alt=""
          />
          <a className={`${darkMode ? "bg-[#1E1E2A] text-blue-500" : "bg-white lg:text-md text-xs text-blue-500"}`}>{props.name}</a>
        </div>

        {/* Info */}
        <div className='text-sm lg:text-sm md:text-xs'>
          <div className='flex gap-1 md:gap-2 md:flex md:justify-start lg:gap-1 lg:flex'>
            <h6 className='text-[#C6C9CD] text-sm lg:text-md'>Blood Group:</h6>
            <p className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}` }>{ props.bloodGroup}</p>
          </div>

          <div className='flex gap-2 lg:gap-1 lg:flex'>
            <h6 className='text-[#C6C9CD]'>Age</h6>
            <p className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}`}>: {props.age}</p>
          </div>

          <div className='flex gap-1'>
            <h6 className='text-[#C6C9CD]'>ID</h6>
            <p className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}`}>: {props.id}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex flex-col justify-end'>
          
          <div className='flex items-center gap-2'>
            <MdLocationOn className='text-blue-500 text-md lg:text-lg' />
            <p className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}`}>{props.location}</p>
          </div>

          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='text-blue-500 text-md lg:text-lg' />
            <p className={`${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}`}>{props.phone}</p>
          </div>

        </div>

      </div>
     
    </div>
  )
}

export default PatientsCard