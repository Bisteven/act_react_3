# Guía de Rutas - Aplicación Next.js

Esta aplicación demuestra el uso de diferentes tipos de rutas en Next.js 15 con App Router.

## Estructura de Rutas Implementadas

### 1. Rutas Básicas
- **`/`** - Página de inicio con navegación a otras secciones
- **`/productos`** - Lista de productos principales
- **`/blog`** - Lista de artículos del blog
- **`/contacto`** - Información de contacto

### 2. Layouts Anidados

#### Productos (`/productos`)
- **Layout anidado**: `app/productos/layout.tsx`
- **Categorías**:
  - `/productos/electronicos` - Productos electrónicos (3 productos)
  - `/productos/ropa` - Productos de ropa (3 productos)

#### Blog (`/blog`)
- **Layout anidado**: `app/blog/layout.tsx`
- **Navegación secundaria** para categorías de blog

### 3. Rutas Dinámicas

#### Productos Individuales
- **`/productos/[id]/page.tsx`** - Páginas dinámicas para productos
- **IDs disponibles**: "1" (Laptop), "2" (Smartphone), "3" (Tablet)
- **Ejemplo**: `/productos/1` muestra detalles de la Laptop

#### Artículos de Blog
- **`/blog/[slug]/page.tsx`** - Páginas dinámicas para artículos
- **Slugs disponibles**:
  - `introduccion-nextjs` - Introducción a Next.js
  - `react-server-components` - React Server Components
  - `app-router-guia` - Guía del App Router

### 4. Rutas de Captura Total (Catch-all)

#### Sistema de Documentación
- **`/docs/[...slug]/page.tsx`** - Captura todas las rutas bajo `/docs/`
- **Ejemplos de rutas**:
  - `/docs` - Página principal de documentación
  - `/docs/guia/instalacion` - Guía de instalación
  - `/docs/api/componentes` - API de componentes
  - `/docs/cualquier/ruta/anidada` - Cualquier ruta anidada

### Características Implementadas

✅ **Layout raíz** con navegación principal  
✅ **Página de inicio** con enlaces a todas las secciones  
✅ **Rutas básicas** para productos, blog y contacto  
✅ **Layouts anidados** para productos y blog  
✅ **Rutas dinámicas** para productos y artículos individuales  
✅ **Sistema de breadcrumbs** en documentación  
✅ **Enlaces dinámicos** usando componente Link de Next.js  
✅ **Manejo de parámetros** en rutas dinámicas  
✅ **Contenido específico** basado en rutas  

### Navegación

La aplicación incluye:
- **Navegación principal** en el layout raíz
- **Navegación secundaria** en layouts anidados
- **Enlaces de retorno** en páginas individuales
- **Breadcrumbs** en el sistema de documentación

### Tecnologías Utilizadas

- **Next.js 15** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **React 19** con Server Components

## Cómo Probar

1. Ejecuta `npm run dev`
2. Visita `http://localhost:3000`
3. Navega por todas las rutas implementadas
4. Prueba las rutas dinámicas y catch-all

### URLs de Ejemplo para Probar

```
http://localhost:3000/
http://localhost:3000/productos
http://localhost:3000/productos/electronicos
http://localhost:3000/productos/ropa
http://localhost:3000/productos/1
http://localhost:3000/productos/2
http://localhost:3000/productos/3
http://localhost:3000/blog
http://localhost:3000/blog/introduccion-nextjs
http://localhost:3000/blog/react-server-components
http://localhost:3000/blog/app-router-guia
http://localhost:3000/contacto
http://localhost:3000/docs
http://localhost:3000/docs/guia/instalacion
http://localhost:3000/docs/api/componentes
```
