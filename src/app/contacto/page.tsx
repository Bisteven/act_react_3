export default function Contacto() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Dirección:</h3>
            <p className="text-gray-600">Calle Principal 123, Ciudad, País</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800">Teléfono:</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800">Email:</h3>
            <p className="text-gray-600">contacto@empresa.com</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800">Horario de Atención:</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sábados: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
