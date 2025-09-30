import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Sección de Blog</h2>
        <nav className="flex space-x-4">
          <Link 
            href="/blog" 
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
          >
            Todos los Artículos
          </Link>
          <Link 
            href="/blog/categoria/tecnologia" 
            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Tecnología
          </Link>
          <Link 
            href="/blog/categoria/tutoriales" 
            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Tutoriales
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
