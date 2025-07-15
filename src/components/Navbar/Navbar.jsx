import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { useTranslation } from '../../translations/translations'
import SwitchButtons from '../SwitchButtons/SwitchButtons'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language } = useAppContext()
  const t = useTranslation(language)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.clients, href: '#clientes' },
    { name: t.nav.contact, href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="src/resources/imgs/CODA 360-logo-transparent.png" alt="CODA" className="logo-image" />
            <span className="logo-text">CODA</span>
          </div>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                className="nav-link"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
            <SwitchButtons />
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 