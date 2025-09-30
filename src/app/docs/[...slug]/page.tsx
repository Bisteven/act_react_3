import Link from "next/link";

interface DocsPageProps {
  params: {
    slug: string[];
  };
}

export default function DocsPage({ params }: DocsPageProps) {
  const { slug } = params;

  // Si no hay slug, mostramos la página principal de docs
  if (!slug || slug.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Documentación</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Bienvenido a la documentación de nuestra aplicación. Aquí encontrarás toda la información 
            necesaria para usar y entender nuestras funcionalidades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/docs/guia/instalacion" 
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold">Guía de Instalación</h3>
              <p className="text-gray-600 text-sm">Aprende cómo instalar y configurar la aplicación</p>
            </Link>
            
            <Link 
              href="/docs/api/componentes" 
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold">API de Componentes</h3>
              <p className="text-gray-600 text-sm">Documentación de todos los componentes disponibles</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Crear breadcrumbs
  const breadcrumbs = ["Docs", ...slug];
  const breadcrumbString = breadcrumbs.join(" > ");

  // Contenido específico basado en la ruta
  const getContent = (segments: string[]) => {
    const path = segments.join("/");
    
    switch (path) {
      case "guia/instalacion":
        return {
          title: "Guía de Instalación",
          content: `
            Esta guía te ayudará a instalar y configurar la aplicación paso a paso.
            
            Requisitos previos:
            - Node.js 18 o superior
            - npm o yarn
            - Editor de código (VS Code recomendado)
            
            Pasos de instalación:
            1. Clona el repositorio
            2. Instala las dependencias con npm install
            3. Configura las variables de entorno
            4. Ejecuta npm run dev para iniciar el servidor de desarrollo
            
            Una vez completados estos pasos, podrás acceder a la aplicación en http://localhost:3000
          `
        };
        
      case "api/componentes":
        return {
          title: "API de Componentes",
          content: `
            Aquí encontrarás la documentación completa de todos los componentes disponibles en la aplicación.
            
            Componentes principales:
            - Layout: Componente principal que envuelve toda la aplicación
            - Navigation: Barra de navegación con enlaces principales
            - ProductCard: Tarjeta para mostrar información de productos
            - BlogPost: Componente para mostrar artículos del blog
            
            Cada componente incluye:
            - Props disponibles
            - Ejemplos de uso
            - Estilos CSS aplicados
            - Casos de uso recomendados
            
            Para más detalles sobre un componente específico, consulta su documentación individual.
          `
        };
        
      default:
        return {
          title: segments[segments.length - 1].charAt(0).toUpperCase() + segments[segments.length - 1].slice(1),
          content: `
            Esta es la documentación para la sección: ${segments.join(" > ")}
            
            Aquí encontrarás información detallada sobre esta funcionalidad específica de la aplicación.
            
            Si necesitas más información, consulta las secciones relacionadas o contacta con nuestro equipo de soporte.
          `
        };
    }
  };

  const content = getContent(slug);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Documentación: {content.title}</h1>
      
      <div className="mb-4">
        <nav className="text-sm text-gray-600">
          <span>{breadcrumbString}</span>
        </nav>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content.content}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href="/docs" 
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          ← Volver a la documentación
        </Link>
      </div>
    </div>
  );
}
