import Link from "next/link";

export default function Productos() {
  const productos = [
    { id: "1", nombre: "Laptop", descripcion: "Laptop de alta gama para trabajo y entretenimiento" },
    { id: "2", nombre: "Smartphone", descripcion: "Smartphone con las últimas tecnologías" },
    { id: "3", nombre: "Tablet", descripcion: "Tablet perfecta para lectura y multimedia" }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-gray-600 mb-4">{producto.descripcion}</p>
            <Link 
              href={`/productos/${producto.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
