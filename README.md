# CODA - Portfolio Empresarial

Un portafolio web moderno y elegante construido con React y Vite para la empresa de desarrollo web CODA, inspirado en el diseño minimalista y profesional.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Utilizando Framer Motion para transiciones fluidas
- **Navegación Intuitiva**: Menú de navegación con scroll suave
- **Secciones Completas**: Hero, About, Skills, Projects, Clients, Contact
- **Formulario de Contacto**: Funcional con validación
- **Filtros de Proyectos**: Por categorías (Web, Mobile, Diseño)
- **Iconos Modernos**: Utilizando Lucide React
- **Tipografía Elegante**: Inter font family

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos personalizados con variables CSS
- **React Router DOM** - Navegación entre secciones

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/coda-portfolio.git
   cd coda-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Navbar.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección de bienvenida
│   ├── About.jsx       # Información personal
│   ├── Skills.jsx      # Habilidades técnicas
│   ├── Projects.jsx    # Galería de proyectos
│   ├── Contact.jsx     # Formulario de contacto
│   ├── Footer.jsx      # Pie de página
│   └── *.css           # Estilos de componentes
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar editando las variables CSS en `src/index.css`:

```css
:root {
  --primary-color: #000000;
  --secondary-color: #ffffff;
  --accent-color: #3b82f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background: #ffffff;
  --background-secondary: #f9fafb;
  --border-color: #e5e7eb;
}
```

### Contenido
- **Información de la Empresa**: Editar `src/components/About/About.jsx`
- **Habilidades**: Modificar `src/components/Skills/Skills.jsx`
- **Proyectos**: Actualizar `src/components/Projects/Projects.jsx`
- **Clientes**: Personalizar `src/components/Clients/Clients.jsx`
- **Contacto**: Cambiar información en `src/components/Contacts/Contact.jsx`

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Importa tu repositorio en Vercel
2. El framework se detectará automáticamente
3. Despliega con un clic

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📞 Contacto

- **Email**: contacto@coda.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

Hecho con ❤️ por CODA 