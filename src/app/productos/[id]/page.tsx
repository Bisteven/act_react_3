import Link from "next/link";

interface ProductoPageProps {
  params: {
    id: string;
  };
}

export default function ProductoPage({ params }: ProductoPageProps) {
  const { id } = params;

  // Simulamos datos de productos
  const productos = {
    "1": {
      nombre: "Laptop",
      descripcion: "Una laptop de alta gama perfecta para trabajo y entretenimiento. Incluye procesador Intel i7, 16GB de RAM y 512GB de almacenamiento SSD.",
      precio: "$1299",
      especificaciones: ["Intel Core i7", "16GB RAM", "512GB SSD", "Pantalla 15.6''", "Windows 11"]
    },
    "2": {
      nombre: "Smartphone",
      descripcion: "Smartphone con las últimas tecnologías. Cámara de 108MP, pantalla OLED de 6.7 pulgadas y batería de larga duración.",
      precio: "$799",
      especificaciones: ["Cámara 108MP", "Pantalla OLED 6.7''", "128GB almacenamiento", "5G", "Android 14"]
    },
    "3": {
      nombre: "Tablet",
      descripcion: "Tablet perfecta para lectura y multimedia. Pantalla de alta resolución, procesador potente y diseño elegante.",
      precio: "$499",
      especificaciones: ["Pantalla 10.9''", "64GB almacenamiento", "WiFi + Cellular", "iPadOS", "12 horas batería"]
    }
  };

  const producto = productos[id as keyof typeof productos] || {
    nombre: "Producto no encontrado",
    descripcion: "El producto solicitado no existe.",
    precio: "N/A",
    especificaciones: []
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Producto: {producto.nombre}</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">{producto.precio}</p>
            <p className="text-gray-700 mb-4">{producto.descripcion}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Especificaciones:</h3>
            <ul className="space-y-2">
              {producto.especificaciones.map((spec, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          href="/productos" 
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          ← Volver a la lista de productos
        </Link>
      </div>
    </div>
  );
}
