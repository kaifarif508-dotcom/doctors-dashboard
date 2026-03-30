import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';

const DoctorCard = ({ name, image, field, location, title }) => {
  const { darkMode } = useTheme();

  return (
   <div className={`
  ${darkMode ? "bg-[#1E1E2A] text-white" : "bg-white text-black"}
  rounded-2xl shadow-md p-2 sm:p-5 md:p-4 lg:gap-3 lg:mr-4
  flex flex-col items-center text-center gap-5
  hover:shadow-lg transition duration-300

  md:flex-row md:items-center md:justify-between
  lg:flex-row flex-wrap lg:justify-center

  w-full sm:w-[48%] md:w-[105%] lg:w-[110%]
`}>
      {/* Image */}
      <img
        className="object-cover w-12 h-12 rounded-full lg:w-14 lg:h-14 md:w-14 md:h-14"
        src={image}
        alt={name}
      />

      {/* Name + Subtitle */}
      <div className="w-full">
        <h5 className="text-sm font-semibold truncate lg:text-lg md:text-md">{name}</h5>
        <p className="text-xs text-gray-400 truncate sm:text-sm md:text-md">{title}</p>
      </div>

      {/* Field */}
      <div className='justify-start lg:flex lg:flex-col lg:items-center lg:justify-center'>
        
      <span className="bg-[#EAF0FF] text-blue-500 lg:text-center lg:px-3 px-4 py-1 rounded-full lg:text-md text-xs sm:text-sm md:text-md font-medium truncate">
        {field}
      </span>
      <br />

      {/* Location */}
      <p className="mt-2 text-xs text-gray-400 truncate sm:text-sm md:text-sm">{location}</p>
      </div>

      {/* Buttons */}
<div className="flex w-full pt-2 text-xs text-gray-500 border-t sm:text-sm">

  <button className="flex items-center justify-center w-1/2 px-2 py-2 transition border-r sm:gap-2 hover:text-blue-500 md:py-3 md:px-3 md:rounded-l-lg">
    
    <MdOutlineEmojiPeople className="text-sm sm:text-lg shrink-0" />
    <span className="whitespace-nowrap">Available</span>
  </button>

  <button className="flex items-center justify-center w-1/2 px-2 py-2 transition sm:gap-2 hover:text-green-500 md:py-3 md:px-3 md:rounded-r-lg">
    
    <IoMdCall className="text-sm sm:text-lg shrink-0" />
    <span className="whitespace-nowrap">Call</span>
  </button>

</div>
    </div>
  );
};

export default DoctorCard;