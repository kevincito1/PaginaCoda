import React from 'react'
import { motion } from 'framer-motion'
import { Users, Code, Palette, Target } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import { useTranslation } from '../../translations/translations'
import './About.css'

const About = () => {
  const { language } = useAppContext()
  const t = useTranslation(language)
  
  const stats = [
    { number: '5+', label: t.about.stats.experience },
    { number: '50+', label: t.about.stats.projects },
    { number: '30+', label: t.about.stats.clients },
  ]

  const values = [
    {
      icon: <Code size={24} />,
      title: language === 'es' ? 'Desarrollo Limpio' : 'Clean Development',
      description: language === 'es' 
        ? 'Código bien estructurado y mantenible que facilita el crecimiento futuro de tu proyecto'
        : 'Well-structured and maintainable code that facilitates the future growth of your project'
    },
    {
      icon: <Palette size={24} />,
      title: language === 'es' ? 'Diseño Intuitivo' : 'Intuitive Design',
      description: language === 'es'
        ? 'Interfaces que priorizan la experiencia del usuario y la accesibilidad para tu audiencia'
        : 'Interfaces that prioritize user experience and accessibility for your audience'
    },
    {
      icon: <Target size={24} />,
      title: language === 'es' ? 'Resultados Medibles' : 'Measurable Results',
      description: language === 'es'
        ? 'Enfoque en métricas y objetivos claros para maximizar el retorno de inversión de tu proyecto'
        : 'Focus on clear metrics and objectives to maximize the return on investment of your project'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{language === 'es' ? 'Nuestra Historia' : 'Our Story'}</h3>
            <p>
              {language === 'es' 
                ? 'CODA es una empresa de desarrollo web especializada en crear soluciones digitales que transforman negocios. Nuestro equipo de expertos combina creatividad y tecnología para desarrollar proyectos que no solo se ven bien, sino que también generan resultados tangibles para nuestros clientes.'
                : 'CODA is a web development company specialized in creating digital solutions that transform businesses. Our team of experts combines creativity and technology to develop projects that not only look good but also generate tangible results for our clients.'
              }
            </p>
            <p>
              {language === 'es'
                ? 'Nos especializamos en desarrollo web moderno, aplicaciones móviles y sistemas personalizados que se adaptan a las necesidades específicas de cada empresa. Creemos en la importancia de la innovación, el rendimiento y la escalabilidad en cada proyecto que desarrollamos.'
                : 'We specialize in modern web development, mobile applications, and custom systems that adapt to the specific needs of each company. We believe in the importance of innovation, performance, and scalability in every project we develop.'
              }
            </p>
            <p>
              {language === 'es'
                ? 'Nuestro compromiso es ser más que un proveedor de servicios; somos un socio estratégico que acompaña a nuestros clientes en su transformación digital, desde la concepción de la idea hasta la implementación y mantenimiento continuo.'
                : 'Our commitment is to be more than a service provider; we are a strategic partner that accompanies our clients in their digital transformation, from the conception of the idea to implementation and continuous maintenance.'
              }
            </p>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="about-image">
              <img src="/images/historia.webp" alt="Equipo de trabajo" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="values-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 