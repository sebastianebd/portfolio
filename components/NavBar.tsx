'use client';
import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='relative top-0 h-15 md:h-20 w-full max-w-6xl mx-auto flex bg-[var(--color-navbar)] text-white 
                    font-bold rounded z-30'>

      <div className='bg-amber-500 text-black  flex-shrink-0  w-16 md:w-26 flex items-center justify-center '>
        <img src="/code-icon.svg" alt="terminal icon" height={35} width={35}/>
      </div>

      <div className=' flex justify-center items-center pl-5'>
        <a href="#home" className='text-md md:text-lg tracking-wider'>SEBASTIÁN</a>
      </div>

      {/* Menú Desktop */}
      <div className='hidden md:flex flex-1 justify-evenly items-center gap-4 sm:gap-4 md:gap-5 lg:gap-7 px-3 '>
        <a href="#home" className=' md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Home</a>
        <a href="#about" className=' md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>About</a>
        <a href="#projects" className=' md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Projects</a>
        <a href="#contact" className=' md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Contact</a>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 backdrop-blur-xs"
            onClick={() => setIsOpen(false)} // Cerrar al hacer click afuera
          ></div>

          {/* Menú Mobile */}
          <div className="absolute top-full left-0 w-full bg-[var(--color-bg)] flex flex-col items-center 
                          py-4 md:hidden border-t border-b border-amber-500 animate-openMenu">
            <a href="#home" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="py-2 text-lg" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="py-2 text-lg" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </>
      )}

      <button
        className="ml-auto mr-8 md:hidden text-2xl focus:outline-none text-amber-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        ☰
      </button>
    </nav>
  );
}

export default NavBar;


