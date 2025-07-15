import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', 'Web', 'Mobile', 'Diseño']

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración',
      image: '/api/placeholder/400/300',
      category: 'Web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real y notificaciones',
      image: '/api/placeholder/400/300',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Sitio web personal con diseño moderno y animaciones fluidas para mostrar proyectos',
      image: '/api/placeholder/400/300',
      category: 'Web',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 4,
      title: 'UI Design System',
      description: 'Sistema de diseño completo con componentes reutilizables y documentación',
      image: '/api/placeholder/400/300',
      category: 'Diseño',
      technologies: ['Figma', 'Storybook', 'React'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con datos en tiempo real y gráficos interactivos',
      image: '/api/placeholder/400/300',
      category: 'Web',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Aplicación para seguimiento de ejercicios con estadísticas y metas personalizadas',
      image: '/api/placeholder/400/300',
      category: 'Mobile',
      technologies: ['Flutter', 'SQLite', 'Google Fit API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestros Proyectos</h2>
          <p className="section-subtitle">
            Una selección de nuestros trabajos más recientes y destacados
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.title}</span>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">Destacado</div>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye size={20} />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 