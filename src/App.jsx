import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Clients from './sections/Clients'
import Project from './sections/Projects'
import Contact from './sections/Contact'
import Feutures from './sections/Feutures'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Clients/>
      <Feutures/>
      <Contact/>
      
      
    </div>
   
  )
}

export default App
