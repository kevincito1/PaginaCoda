import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { useTranslation } from '../../translations/translations'
import './Clients.css'

const Clients = () => {
  const { language } = useAppContext()
  const t = useTranslation(language)
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      logo: 'TC',
      industry: 'Tecnología',
      testimonial: 'CODA transformó completamente nuestra plataforma web. El resultado superó todas nuestras expectativas y ha impulsado significativamente nuestras ventas.',
      rating: 5,
      project: 'Plataforma E-commerce'
    },
    {
      id: 2,
      name: 'InnovateLab',
      logo: 'IL',
      industry: 'Startup',
      testimonial: 'Excelente trabajo en nuestra aplicación móvil. La experiencia de usuario es increíble y el equipo de CODA fue muy profesional durante todo el proceso.',
      rating: 5,
      project: 'App Móvil React Native'
    },
    {
      id: 3,
      name: 'DesignStudio Pro',
      logo: 'DS',
      industry: 'Diseño',
      testimonial: 'CODA no solo desarrolló nuestro sitio web, sino que también mejoró nuestro proceso de diseño. Son verdaderos expertos en su campo.',
      rating: 5,
      project: 'Sitio Web Corporativo'
    },
    {
      id: 4,
      name: 'GlobalFinance',
      logo: 'GF',
      industry: 'Finanzas',
      testimonial: 'Proyecto entregado a tiempo y con calidad excepcional. El dashboard financiero que desarrollaron ha optimizado nuestros procesos internos.',
      rating: 5,
      project: 'Dashboard Financiero'
    },
    {
      id: 5,
      name: 'EduTech Platform',
      logo: 'EP',
      industry: 'Educación',
      testimonial: 'La plataforma educativa que desarrolló CODA ha revolucionado nuestra forma de enseñar. Los estudiantes están muy satisfechos con la interfaz.',
      rating: 5,
      project: 'Plataforma LMS'
    },
    {
      id: 6,
      name: 'HealthCare Plus',
      logo: 'HC',
      industry: 'Salud',
      testimonial: 'Sistema robusto y fácil de usar. Los médicos están muy satisfechos con la interfaz y la eficiencia que ha traído a nuestro hospital.',
      rating: 5,
      project: 'Sistema de Gestión Hospitalaria'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} size={16} fill="currentColor" />
    ))
  }

  return (
    <section id="clientes" className="clients section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.clients.title}</h2>
          <p className="section-subtitle">
            {t.clients.subtitle}
          </p>
        </motion.div>

        <div className="carousel-container">
          <motion.button
            className="carousel-button prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Anterior cliente"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="carousel-wrapper" ref={carouselRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="carousel-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="client-card">
                  <div className="client-header">
                    <div className="client-logo">
                      <span>{clients[currentIndex].logo}</span>
                    </div>
                    <div className="client-info">
                      <h3 className="client-name">{clients[currentIndex].name}</h3>
                      <p className="client-industry">{clients[currentIndex].industry}</p>
                      <p className="client-project">{clients[currentIndex].project}</p>
                    </div>
                  </div>

                  <div className="client-testimonial">
                    <p>"{clients[currentIndex].testimonial}"</p>
                  </div>

                  <div className="client-rating">
                    <div className="stars">
                      {renderStars(clients[currentIndex].rating)}
                    </div>
                    <span className="rating-text">
                      {clients[currentIndex].rating}/5 {language === 'es' ? 'estrellas' : 'stars'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="carousel-button next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Siguiente cliente"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          className="carousel-indicators"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {clients.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al cliente ${index + 1}`}
            />
          ))}
        </motion.div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{clients.length}+</div>
              <div className="stat-label">{language === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">{language === 'es' ? 'Proyectos Entregados' : 'Projects Delivered'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5.0</div>
              <div className="stat-label">{language === 'es' ? 'Calificación Promedio' : 'Average Rating'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients 