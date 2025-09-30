export default function Electronicos() {
  const productos = [
    { nombre: "iPhone 15 Pro", precio: "$999", descripcion: "El último smartphone de Apple" },
    { nombre: "MacBook Air M2", precio: "$1199", descripcion: "Laptop ultradelgada con chip M2" },
    { nombre: "iPad Pro", precio: "$799", descripcion: "Tablet profesional para creativos" }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos > Electrónicos</h1>
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
