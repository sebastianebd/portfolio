import React from 'react'

const NavBar = () => {
  return (
    <div className='top-0 pb-8 pt-8 w-full max-w-4xl mx-auto flex flex-row justify-between rounded bg-[var(--color-navbar)] text-white text-lg font-bold'>
      <div className='pl-25'><a href="#home">Sebastián</a></div>
      <div className='flex gap-15 pr-25'>  
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default NavBar

