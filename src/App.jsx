import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Clients from './components/Clients/Clients'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 