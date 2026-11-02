import React, { useState } from 'react';

export default function Contactanos() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }
    setEnviado(true);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">📞 Contáctanos</h2>
      <p className="text-sm text-gray-600 mb-6">¿Tienes dudas con el inventario o requerimientos de proveedores? Escríbenos:</p>
      
      {enviado ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-md text-center font-medium shadow-sm">
          ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre:</label>
            <input 
              id="nombre"
              type="text" 
              required 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Juan Pérez" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="correo" className="text-sm font-semibold text-gray-700">Correo Electrónico:</label>
            <input 
              id="correo"
              type="email" 
              required 
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.cl" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="mensaje" className="text-sm font-semibold text-gray-700">Mensaje:</label>
            <textarea 
              id="mensaje"
              rows="4" 
              required 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escriba su requerimiento aquí..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm resize-y"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-md font-semibold text-base transition-colors duration-150 shadow-sm cursor-pointer mt-2"
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
}
