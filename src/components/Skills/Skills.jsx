import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      category: 'Diseño & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Illustrator', level: 70 },
        { name: 'Principle', level: 65 },
        { name: 'Sketch', level: 70 }
      ]
    },
    {
      category: 'Herramientas',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ]

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Git', 'Figma', 'Next.js', 'Express.js',
    'GraphQL', 'Jest', 'Webpack', 'Vue.js', 'Tailwind CSS', 'Sass',
    'Adobe XD', 'Photoshop', 'Illustrator', 'VS Code', 'Principle'
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nuestras Habilidades</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que utilizamos para crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="technologies-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="technologies-title">Tecnologías que manejamos</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 