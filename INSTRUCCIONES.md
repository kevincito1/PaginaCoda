# Instrucciones para ejecutar el proyecto CODA

## 🚨 Problema con PowerShell

Debido a las restricciones de ejecución de scripts en tu sistema, necesitas seguir estos pasos manualmente:

## 📋 Pasos para ejecutar el proyecto

### 1. Habilitar la ejecución de scripts (Opcional)
Si quieres habilitar npm/npx, ejecuta PowerShell como administrador y corre:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Instalar dependencias
Abre una terminal (CMD o PowerShell) y ejecuta:
```bash
npm install
```

### 3. Ejecutar el proyecto
```bash
npm run dev
```

### 4. Abrir en el navegador
El proyecto se abrirá automáticamente en: `http://localhost:3000`

## 🛠️ Alternativas si npm no funciona

### Opción 1: Usar yarn
```bash
yarn install
yarn dev
```

### Opción 2: Usar pnpm
```bash
pnpm install
pnpm dev
```

### Opción 3: Usar CMD en lugar de PowerShell
1. Abre el Símbolo del sistema (CMD)
2. Navega a la carpeta del proyecto
3. Ejecuta los comandos npm

## 📁 Estructura del proyecto creado

```
pagina/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── .gitignore
```

## 🎨 Características del portafolio CODA

✅ **Diseño moderno y minimalista** inspirado en dcorrea.co
✅ **Completamente responsive** para móvil, tablet y desktop
✅ **Animaciones suaves** con Framer Motion
✅ **Navegación fluida** con scroll suave
✅ **Secciones completas**: Hero, About, Skills, Projects, Contact
✅ **Formulario de contacto** funcional
✅ **Filtros de proyectos** por categorías
✅ **Iconos modernos** con Lucide React
✅ **Tipografía elegante** Inter font

## 🔧 Personalización

Una vez que el proyecto esté funcionando, puedes personalizar:

1. **Información personal** en `src/components/About.jsx`
2. **Habilidades** en `src/components/Skills.jsx`
3. **Proyectos** en `src/components/Projects.jsx`
4. **Contacto** en `src/components/Contact.jsx`
5. **Colores** en `src/index.css` (variables CSS)

## 🚀 Despliegue

Para desplegar el proyecto:

1. **Construir para producción**:
   ```bash
   npm run build
   ```

2. **Subir a GitHub** y conectar con:
   - **Netlify** (recomendado)
   - **Vercel**
   - **GitHub Pages**

## 📞 Soporte

Si tienes problemas para ejecutar el proyecto, puedes:

1. Verificar que Node.js esté instalado: `node --version`
2. Usar CMD en lugar de PowerShell
3. Habilitar la ejecución de scripts en PowerShell
4. Usar yarn o pnpm como alternativas

---

¡El portafolio CODA está listo para ser personalizado y desplegado! 🎉 