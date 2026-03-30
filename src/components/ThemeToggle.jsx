import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className='px-4 py-2 bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-white'
    >
      {darkMode ? "🌙": "☀️" }
    </button>
  )
}

export default ThemeToggle