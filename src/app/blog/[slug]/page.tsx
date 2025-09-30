import Link from "next/link";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  // Simulamos datos de artículos
  const articulos = {
    "introduccion-nextjs": {
      titulo: "Introducción a Next.js",
      contenido: `
        Next.js es un framework de React que proporciona funcionalidades adicionales como renderizado del lado del servidor, 
        generación de sitios estáticos, y enrutamiento basado en archivos. Es una herramienta poderosa para crear aplicaciones 
        web modernas y escalables.
        
        En este artículo exploraremos los conceptos básicos de Next.js, incluyendo:
        - Configuración inicial del proyecto
        - Estructura de archivos y carpetas
        - Sistema de enrutamiento
        - Componentes y páginas
        - Optimizaciones automáticas
        
        Next.js ha revolucionado la forma en que desarrollamos aplicaciones React, ofreciendo una experiencia de desarrollo 
        mejorada y mejor rendimiento en producción.
      `,
      fecha: "15 de Enero, 2024",
      autor: "Juan Pérez"
    },
    "react-server-components": {
      titulo: "React Server Components",
      contenido: `
        Los React Server Components representan una evolución significativa en cómo construimos aplicaciones React. 
        Permiten ejecutar componentes directamente en el servidor, reduciendo el tamaño del bundle del cliente y 
        mejorando el rendimiento.
        
        Características principales:
        - Ejecución en el servidor
        - Acceso directo a bases de datos
        - Reducción del bundle del cliente
        - Mejor rendimiento inicial
        - Streaming de datos
        
        Los Server Components abren nuevas posibilidades para el desarrollo web, especialmente en aplicaciones 
        que requieren acceso frecuente a datos del servidor o procesamiento pesado.
      `,
      fecha: "10 de Enero, 2024",
      autor: "María García"
    },
    "app-router-guia": {
      titulo: "Guía del App Router",
      contenido: `
        El App Router de Next.js introduce un nuevo paradigma de enrutamiento basado en la carpeta app/. 
        Este sistema ofrece mayor flexibilidad y mejores capacidades de renderizado.
        
        Principales características:
        - Layouts anidados
        - Rutas dinámicas mejoradas
        - Streaming y Suspense
        - Rutas de captura (catch-all)
        - Loading y Error boundaries
        
        En esta guía aprenderemos a implementar cada una de estas características y cómo aprovecharlas 
        para crear aplicaciones más robustas y eficientes.
      `,
      fecha: "5 de Enero, 2024",
      autor: "Carlos López"
    }
  };

  const articulo = articulos[slug as keyof typeof articulos] || {
    titulo: "Artículo no encontrado",
    contenido: "El artículo solicitado no existe.",
    fecha: "N/A",
    autor: "N/A"
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Artículo: {articulo.titulo}</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 text-gray-600">
          <p><strong>Autor:</strong> {articulo.autor}</p>
          <p><strong>Fecha:</strong> {articulo.fecha}</p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {articulo.contenido}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href="/blog" 
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          ← Volver a la lista de artículos
        </Link>
      </div>
    </div>
  );
}
