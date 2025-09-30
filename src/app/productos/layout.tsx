import Link from "next/link";

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Sección de Productos</h2>
        <nav className="flex space-x-4">
          <Link 
            href="/productos" 
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Todos los Productos
          </Link>
          <Link 
            href="/productos/electronicos" 
            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Electrónicos
          </Link>
          <Link 
            href="/productos/ropa" 
            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            Ropa
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
