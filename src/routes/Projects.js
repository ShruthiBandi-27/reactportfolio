import React from 'react'
import Footer from '../components/Footer'
import MainImg2 from '../components/MainImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

export default function Projects() {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="Projects" text="Some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}
