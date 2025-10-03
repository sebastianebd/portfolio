'use client';
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-[var(--color-bg)] z-50">
      <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-white font-semibold text-lg">Cargando...</p>
    </div>
  );
};

export default Loader;