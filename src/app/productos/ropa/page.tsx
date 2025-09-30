export default function Ropa() {
  const productos = [
    { nombre: "Camiseta Premium", precio: "$29", descripcion: "Camiseta de algodón 100% orgánico" },
    { nombre: "Jeans Clásicos", precio: "$79", descripcion: "Jeans de corte clásico y cómodos" },
    { nombre: "Chaqueta Deportiva", precio: "$89", descripcion: "Chaqueta ligera para actividades deportivas" }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos > Ropa</h1>
      <p className="text-gray-600 mb-6">{productos.length} productos encontrados</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-2xl font-bold text-blue-600 mb-2">{producto.precio}</p>
            <p className="text-gray-600">{producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
