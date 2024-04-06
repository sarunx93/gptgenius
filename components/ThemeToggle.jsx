'use client'
import React, { useState } from 'react'
import { BsMoonFill, BsSunFill, BsSunfill } from 'react-icons/bs'

const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter)
  
  const toggleTheme = ()=>{
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }
  
  return (
    <button className="btn btn-primary btn-sm" onClick={toggleTheme}>
        {theme === 'winter' ? (
          <BsMoonFill className='h-4 w-4'/>
        ):(
          <BsSunFill className='h-4 w-4'/>
        )}
    </button>
  )
}

export default ThemeToggle