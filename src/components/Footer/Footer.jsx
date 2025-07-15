import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo-container">
              <img src="src/resources/imgs/CODA 360-logo-transparent.png" alt="CODA" className="footer-logo" />
              <h3>CODA</h3>
            </div>
            <p className="footer-tagline">
              Creando experiencias digitales que inspiran y conectan
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre nosotros</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contacto</h4>
            <p>contacto@coda.com</p>
            <p>+57 317 823 32 32</p>
            <p>Medellín, Colombia</p>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Síguenos</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>
              © {currentYear} CODA. Todos los derechos reservados. 
              Hecho con <Heart size={16} className="heart-icon" /> en Medellín, Colombia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 