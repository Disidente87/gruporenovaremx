# Grupo Renovare MX - Sitio Web

Sitio web profesional para Grupo Renovare MX, una empresa especializada en flipping inmobiliario en México.

## 🏗️ Descripción del Proyecto

Grupo Renovare MX se dedica al flipping inmobiliario, realizando contratos con dueños de viviendas, locales o edificios para renovarlos y venderlos a un precio mayor. Las ganancias se reparten entre el dueño y la empresa, con porcentajes que varían según cada proyecto.

## ✨ Características

- **Diseño Moderno y Responsivo**: Interfaz adaptada para todos los dispositivos
- **Navegación Intuitiva**: Menú de navegación con scroll suave
- **Formulario de Contacto**: Sistema de contacto integrado para evaluaciones gratuitas
- **Secciones Informativas**: Explicación detallada del modelo de negocio
- **Componentes Reutilizables**: Arquitectura modular con componentes UI personalizados

## 🚀 Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utilitario
- **Radix UI**: Componentes de UI accesibles y personalizables
- **Lucide React**: Iconografía moderna y consistente
- **Framer Motion**: Animaciones y transiciones suaves

## 📁 Estructura del Proyecto

```
gruporenovaremx/
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Layout principal de la aplicación
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/                  # Componentes base de UI
│   │   ├── button.tsx       # Componente de botón
│   │   ├── card.tsx         # Componente de tarjeta
│   │   ├── accordion.tsx    # Componente de acordeón
│   │   └── separator.tsx    # Componente separador
│   ├── header.tsx           # Encabezado con navegación
│   ├── hero-section.tsx     # Sección principal
│   ├── services-section.tsx # Sección de servicios
│   ├── process-section.tsx  # Sección del proceso
│   ├── about-section.tsx    # Sección sobre nosotros
│   ├── contact-section.tsx  # Sección de contacto
│   └── footer.tsx           # Pie de página
├── lib/
│   └── utils.ts             # Funciones utilitarias
├── public/                  # Archivos estáticos
├── package.json             # Dependencias del proyecto
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

## 🎨 Componentes Principales

### Header
- Navegación responsive con menú móvil
- Logo de la empresa con gradiente personalizado
- Botón CTA para consultas gratuitas

### Hero Section
- Mensaje principal sobre el modelo de negocio
- Beneficios clave destacados
- Botones de llamada a la acción

### Services Section
- Tipos de propiedades que renuevan
- Servicios de renovación ofrecidos
- Características específicas de cada servicio

### Process Section
- Proceso paso a paso del flipping
- Modelo de ganancias compartidas
- Explicación del flujo de trabajo

### About Section
- Información sobre la empresa
- Estadísticas y logros
- Valores corporativos
- Equipo directivo

### Contact Section
- Formulario de contacto completo
- Información de contacto
- Múltiples canales de comunicación

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd gruporenovaremx
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev`: Ejecuta el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Ejecuta la aplicación construida
- `npm run lint`: Ejecuta el linter de código

## 🎯 Funcionalidades Clave

### Modelo de Negocio
- **Sin Inversión Inicial**: La empresa financia toda la renovación
- **Ganancias Compartidas**: Distribución flexible según el proyecto
- **Proceso Transparente**: Contratos claros y documentados

### Tipos de Propiedades
- Casas residenciales
- Departamentos
- Locales comerciales
- Edificios completos

### Servicios de Renovación
- Renovación estructural
- Acabados premium
- Sistemas modernos (eléctrico, plomería, climatización)

## 🔧 Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.ts`:
- `real-estate`: Paleta de azules para el sector inmobiliario
- `profit`: Paleta de verdes para las ganancias

### Contenido
El contenido está centralizado en cada componente y puede ser fácilmente modificado para adaptarse a las necesidades específicas de la empresa.

## 📱 Responsive Design

El sitio está completamente optimizado para:
- Dispositivos móviles
- Tablets
- Escritorio
- Diferentes tamaños de pantalla

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar el repositorio a Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores
- Netlify
- AWS Amplify
- Cualquier proveedor que soporte Next.js

## 📞 Contacto

Para más información sobre el proyecto o soporte técnico:
- Email: info@gruporenovaremx.com
- Teléfono: +52 (55) 1234-5678

## 📄 Licencia

Este proyecto es propiedad de Grupo Renovare MX. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Grupo Renovare MX**
