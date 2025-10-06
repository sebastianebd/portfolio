import React from 'react'
import NavBar from "@/components/NavBar";

import HomeSection from  "@/components/HomeSection"
import AboutSection from  "@/components/AboutSection"
import ProyectsSection from  "@/components/ProyectsSection"

export default function page() {
  return (

    <main>
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <ProyectsSection/>
    </main>
  )
    
    
}