import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MainImg2 from '../components/MainImg2'
import { AboutContent } from '../components/AboutContent'

export default function About() {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="About" text="I'm a fullStack developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
