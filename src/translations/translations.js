export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      skills: 'Habilidades',
      projects: 'Proyectos',
      clients: 'Clientes',
      contact: 'Contacto'
    },
    
    // Hero
    hero: {
      title: 'Soluciones Digitales Innovadoras',
      subtitle: 'Transformamos ideas en experiencias digitales excepcionales',
      cta: 'Conoce más',
      scroll: 'Desplázate para explorar'
    },
    
    // About
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Somos un equipo apasionado por la innovación digital',
      description: 'En CODA 360, nos especializamos en crear soluciones digitales que transforman negocios. Nuestro equipo combina creatividad, tecnología y estrategia para entregar resultados excepcionales.',
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        experience: 'Años de Experiencia'
      }
    },
    
    // Skills
    skills: {
      title: 'Nuestras Habilidades',
      subtitle: 'Tecnologías y herramientas que dominamos',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Móvil',
        design: 'Diseño'
      }
    },
    
    // Projects
    projects: {
      title: 'Nuestros Proyectos',
      subtitle: 'Trabajos destacados que hemos realizado',
      viewProject: 'Ver Proyecto',
      viewAll: 'Ver Todos'
    },
    
    // Clients
    clients: {
      title: 'Nuestros Clientes',
      subtitle: 'Empresas que confían en nosotros',
      testimonial: 'Testimonios'
    },
    
    // Contact
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Tienes un proyecto en mente? Hablemos',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email'
      }
    },
    
    // Footer
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio'
    }
  },
  
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      clients: 'Clients',
      contact: 'Contact'
    },
    
    // Hero
    hero: {
      title: 'Innovative Digital Solutions',
      subtitle: 'We transform ideas into exceptional digital experiences',
      cta: 'Learn More',
      scroll: 'Scroll to explore'
    },
    
    // About
    about: {
      title: 'About Us',
      subtitle: 'We are a team passionate about digital innovation',
      description: 'At CODA 360, we specialize in creating digital solutions that transform businesses. Our team combines creativity, technology, and strategy to deliver exceptional results.',
      stats: {
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        experience: 'Years of Experience'
      }
    },
    
    // Skills
    skills: {
      title: 'Our Skills',
      subtitle: 'Technologies and tools we master',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        design: 'Design'
      }
    },
    
    // Projects
    projects: {
      title: 'Our Projects',
      subtitle: 'Outstanding work we have delivered',
      viewProject: 'View Project',
      viewAll: 'View All'
    },
    
    // Clients
    clients: {
      title: 'Our Clients',
      subtitle: 'Companies that trust us',
      testimonial: 'Testimonials'
    },
    
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a project in mind? Let\'s talk',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email'
      }
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
}

export const useTranslation = (language) => {
  return translations[language] || translations.es
} 