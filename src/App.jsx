import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <main className='bg-black'>
      <NavBar/>
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
     </main>
    </>
  )
}

export default App
