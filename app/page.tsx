import React from 'react'
import NavBar from "@/components/layout/NavBar";
import FooterSection from "@/components/sections/FooterSection";

import HomeSection from  "@/components/sections/HomeSection"
import AboutSection from  "@/components/sections/AboutSection"
import ProjectsSection from  "@/components/sections/ProjectsSection"
import ContactSection from  "@/components/sections/ContactSection"

export default function page() {
  return (

    <main>
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>

    </main>
  )
    
    
}