import React from 'react'
import { motion } from 'framer-motion'
import { Users, Code, Palette, Target } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { number: '5+', label: 'Años de experiencia' },
    { number: '50+', label: 'Proyectos completados' },
    { number: '30+', label: 'Clientes satisfechos' },
    
  ]

  const values = [
    {
      icon: <Code size={24} />,
      title: 'Desarrollo Limpio',
      description: 'Código bien estructurado y mantenible que facilita el crecimiento futuro de tu proyecto'
    },
    {
      icon: <Palette size={24} />,
      title: 'Diseño Intuitivo',
      description: 'Interfaces que priorizan la experiencia del usuario y la accesibilidad para tu audiencia'
    },
    {
      icon: <Target size={24} />,
      title: 'Resultados Medibles',
      description: 'Enfoque en métricas y objetivos claros para maximizar el retorno de inversión de tu proyecto'
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
          <h2 className="section-title">Sobre nosotros</h2>
          <p className="section-subtitle">
            Conoce más sobre nuestra trayectoria y pasión por el desarrollo digital
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
            <h3>Nuestra Historia</h3>
            <p>
              CODA es una empresa de desarrollo web especializada en crear soluciones digitales 
              que transforman negocios. Nuestro equipo de expertos combina creatividad y tecnología 
              para desarrollar proyectos que no solo se ven bien, sino que también generan resultados 
              tangibles para nuestros clientes.
            </p>
            <p>
              Nos especializamos en desarrollo web moderno, aplicaciones móviles y sistemas 
              personalizados que se adaptan a las necesidades específicas de cada empresa. 
              Creemos en la importancia de la innovación, el rendimiento y la escalabilidad 
              en cada proyecto que desarrollamos.
            </p>
            <p>
              Nuestro compromiso es ser más que un proveedor de servicios; somos un socio 
              estratégico que acompaña a nuestros clientes en su transformación digital, 
              desde la concepción de la idea hasta la implementación y mantenimiento continuo.
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
              <img src="src/resources/imgs/historia.webp" alt="Equipo de trabajo" />
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