import React, { useState } from 'react';
import { useInventario } from '../context/InventarioContext';

export default function IngresarArticulo({ setPaginaActual }) {
  const { agregarArticulo } = useInventario();
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && marca.trim() && tipo.trim()) {
      agregarArticulo({ nombre, marca, tipo });
      
      setNombre('');
      setMarca('');
      setTipo('');
      
      // Te redirige a la pestaña que sí te funciona
      setPaginaActual('inventario');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto my-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
        Registrar Nuevo Artículo al Inventario
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nombreItem" className="text-sm font-semibold text-gray-700">Nombre del Producto</label>
          <input
            id="nombreItem"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Aceite"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="marcaItem" className="text-sm font-semibold text-gray-700">Marca</label>
          <input
            id="marcaItem"
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            placeholder="Ej: Maravilla"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="tipoItem" className="text-sm font-semibold text-gray-700">Tipo de Producto</label>
          <select
            id="tipoItem"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          >
            <option value="">-- Seleccione una Categoría --</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Carnes y Pescados">Carnes y Pescados</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors shadow-sm cursor-pointer mt-2"
        >
          Guardar en Inventario
        </button>
      </form>
    </div>
  );
}
