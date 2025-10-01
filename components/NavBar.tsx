import React from 'react';

const NavBar = () => {
  return (
    <nav className='relative top-0 h-15 md:h-20 w-full max-w-6xl mx-auto flex bg-[var(--color-navbar)] text-white 
                    font-bold rounded z-20'>

      <div className='bg-amber-500 text-black  flex-shrink-0  w-[120px] md:w-[250px] flex items-center justify-center '>
        <a href="#home" className='text-sm md:text-lg'>SEBASTIÁN</a>
      </div>

      <div className='flex-1 flex justify-evenly items-center gap-4 sm:gap-4 md:gap-5 lg:gap-7 px-3 '>
        <a href="#home" className='hidden md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Home</a>
        <a href="#about" className='hidden md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>About</a>
        <a href="#projects" className='hidden md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Projects</a>
        <a href="#contact" className='hidden md:text-base lg:text-lg hover:-translate-y-1.5 transition-all duration-300 hover:rotate-1 hover:text-amber-400'>Contact</a>
      </div>

    </nav>
  );
}

export default NavBar;


