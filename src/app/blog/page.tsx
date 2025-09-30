import Link from "next/link";

export default function Blog() {
  const articulos = [
    { 
      slug: "introduccion-nextjs", 
      titulo: "Introducción a Next.js", 
      descripcion: "Aprende los conceptos básicos de Next.js y sus características principales." 
    },
    { 
      slug: "react-server-components", 
      titulo: "React Server Components", 
      descripcion: "Descubre cómo funcionan los Server Components en React y Next.js." 
    },
    { 
      slug: "app-router-guia", 
      titulo: "Guía del App Router", 
      descripcion: "Una guía completa sobre el nuevo sistema de routing de Next.js." 
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <div className="space-y-6">
        {articulos.map((articulo) => (
          <div key={articulo.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{articulo.titulo}</h2>
            <p className="text-gray-600 mb-4">{articulo.descripcion}</p>
            <Link 
              href={`/blog/${articulo.slug}`}
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Leer Artículo
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
