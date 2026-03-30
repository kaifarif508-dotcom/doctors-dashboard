import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex items-center justify-between h-16 px-4 sm:px-6 md:px-12
        shadow-sm border-b border-zinc-300 dark:border-zinc-700
        fixed top-0 left-0 right-0 z-40
        bg-white dark:bg-[#121212] transition-all duration-300
      `}
    >
      {/* Left: Hamburger + Theme Toggle */}
      <div className="flex items-center gap-3">
        {/* Hamburger for Mobile */}
        <button
          className="p-2 transition rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={toggleSidebar}
        >
          <IoMenu className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />
        </button>
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Right: Search, Notifications, Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="p-2 bg-[#F6F7FD] dark:bg-[#1E1E1E] rounded-xl hover:bg-[#e0e4f0] dark:hover:bg-[#2A2A2A] transition">
          <IoIosSearch className="text-xl text-gray-600 dark:text-gray-300" />
        </button>

        {/* Notifications */}
        <button className="p-2 bg-[#F6F7FD] dark:bg-[#1E1E1E] rounded-xl hover:bg-[#e0e4f0] dark:hover:bg-[#2A2A2A] transition">
          <IoMdNotifications className="text-xl text-gray-600 dark:text-gray-300" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170"
            alt="Profile"
          />
          <div className="flex-col hidden leading-tight sm:flex">
            <span className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              Dr. Stranger
            </span>
            <span className="text-sm text-[#5E676E] dark:text-gray-400">Pediatrics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;