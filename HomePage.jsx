/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RealtorSection from '../components/RealtorSection'
import ProjectsSection from '../components/ProjectsSection'
import HappyClients from '../components/HappyClients'
import FooterSection from '../components/FooterSection'


const HomePage = () => {
  return (
    <div>
    <Navbar />
      
      <Hero />

      <RealtorSection />

      <ProjectsSection />

      <HappyClients />

      <FooterSection />
      
    </div>
  )
}

export default HomePage
