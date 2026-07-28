# Portfolio Project Guidelines

Este archivo contiene el contexto y las reglas principales para trabajar en este proyecto. Todos los agentes y asistentes de IA deben seguir estas directrices.

## Contexto del Proyecto
- **Tipo**: Portafolio Personal.
- **Propósito**: Atraer a futuros empleadores y contratistas mostrando un perfil profesional con un **diseño premium** y de alta gama.
- **Secciones Principales**:
  - **Home**: Sección principal de gran impacto visual y animaciones sutiles.
  - **About Me**: Información sobre el perfil, habilidades y experiencia.
  - **Projects**: Muestra de trabajos y proyectos realizados.
  - **Contact**: Formulario funcional para contacto directo.

## Stack Tecnológico
- **Framework**: Next.js 15 (App Router).
- **Lenguaje**: TypeScript.
- **Estilos**: Tailwind CSS v4.
- **Animaciones e Interacciones**: Framer Motion y React Intersection Observer (para animaciones al hacer scroll).
- **Formularios y Validación**: React Hook Form y Yup.
- **Envío de Correos**: Nodemailer (para el formulario de contacto).
- **Notificaciones**: React Toastify (para feedback al usuario).

## Reglas de Diseño e Implementación
1. **Estética Premium**: 
   - Evitar diseños genéricos o que parezcan plantillas básicas. 
   - Utilizar tipografías modernas, buen manejo del espacio en blanco (whitespace) y una paleta de colores coherente y elegante.
2. **Animaciones Fluidas (Motion)**:
   - Aprovechar `framer-motion` para transiciones de página, revelaciones al hacer scroll y micro-interacciones. 
   - Las animaciones deben sentirse sofisticadas, no excesivas ni lentas.
3. **Arquitectura y Componentes**:
   - Mantener componentes reutilizables en la carpeta `components/`.
   - Separar correctamente Server Components y Client Components. Usar `"use client"` únicamente cuando sea necesario (por ejemplo, para animaciones, hooks de React o manejo de eventos).
4. **Manejo de Formularios**:
   - La sección de contacto debe validarse siempre de lado del cliente usando `yup` junto con `react-hook-form`.
   - Dar un feedback claro (éxito/error) al usuario tras enviar el formulario usando `react-toastify`.
5. **Responsividad Total**:
   - Todo el diseño debe ser impecable desde dispositivos móviles hasta monitores de escritorio.
