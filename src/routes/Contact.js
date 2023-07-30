import React from 'react'
import { ContactForm } from '../components/ContactForm'
import Footer from '../components/Footer'
import MainImg2 from '../components/MainImg2'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <MainImg2 heading="Contact" text="Let's connect"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
