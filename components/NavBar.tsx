import React from 'react';

const NavBar = () => {
  return (
    <nav className='top-0 h-15 md:h-20 w-full max-w-6xl mx-auto flex bg-[var(--color-navbar)] text-white font-bold rounded'>

      <div className='bg-indigo-600 flex-shrink-0  w-[120px] md:w-[250px] flex items-center justify-center'>
        <a href="#home" className='text-sm md:text-lg'>SEBASTIÁN</a>
      </div>

      <div className='flex-1 flex justify-evenly items-center gap-4 sm:gap-4 md:gap-5 lg:gap-7 px-3'>
        <a href="#home" className='text-xs md:text-base lg:text-lg'>Home</a>
        <a href="#about" className='text-xs md:text-base lg:text-lg'>About</a>
        <a href="#projects" className='text-xs md:text-base lg:text-lg'>Projects</a>
        <a href="#contact" className='text-xs md:text-base lg:text-lg'>Contact</a>
      </div>

    </nav>
  );
}

export default NavBar;


