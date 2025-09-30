import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Página de Inicio</h1>
      
      <p className="text-lg mb-8 text-gray-700">
        ¡Bienvenido a nuestra aplicación! Esta es la página principal donde puedes explorar 
        nuestros productos, leer artículos del blog y ponerte en contacto con nosotros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Productos</h2>
          <p className="text-gray-600 mb-4">
            Descubre nuestra amplia gama de productos de calidad.
          </p>
          <Link 
            href="/productos" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Ver Productos
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Blog</h2>
          <p className="text-gray-600 mb-4">
            Lee nuestros últimos artículos y novedades.
          </p>
          <Link 
            href="/blog" 
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Leer Blog
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contacto</h2>
          <p className="text-gray-600 mb-4">
            Ponte en contacto con nuestro equipo de soporte.
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
