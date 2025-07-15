import React from 'react'
import { Moon, Sun, Globe } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import './SwitchButtons.css'

const SwitchButtons = () => {
  const { isDarkMode, language, toggleDarkMode, toggleLanguage } = useAppContext()

  return (
    <div className="switch-buttons">
      <button
        className={`switch-button ${isDarkMode ? 'active' : ''}`}
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        title={isDarkMode ? 'Modo oscuro' : 'Modo claro'}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      
      <button
        className={`switch-button ${language === 'en' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label={language === 'es' ? 'Cambiar a inglés' : 'Change to Spanish'}
        title={language === 'es' ? 'Español' : 'English'}
      >
        <Globe size={18} />
        <span className="language-indicator">{language.toUpperCase()}</span>
      </button>
    </div>
  )
}

export default SwitchButtons 