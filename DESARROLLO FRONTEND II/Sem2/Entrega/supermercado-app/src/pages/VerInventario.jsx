import React from 'react';
import { useInventario } from '../context/InventarioContext';

export default function VerInventario() {
  const { articulos } = useInventario();

  // Funcion auxiliar para asignar graficos automaticos segun la categoria
  const obtenerIcono = (categoria) => {
    switch (categoria) {
      case 'Abarrotes': return '🍾';
      case 'Lácteos': return '🥛';
      case 'Carnes y Pescados': return '🥩';
      case 'Limpieza': return '🧼';
      case 'Frutas y Verduras': return '🍎';
      default: return '📦';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
        Artículos en Inventario Actual
      </h2>
      {articulos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No hay artículos registrados en el stock.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-200">
                <th className="py-3 px-4 font-semibold">Nombre Artículo</th>
                <th className="py-3 px-4 font-semibold">Marca</th>
                <th className="py-3 px-4 font-semibold">Tipo / Categoría</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
              {articulos.map((articulo) => (
                <tr key={articulo.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
                    <span>{obtenerIcono(articulo.tipo)}</span>
                    {articulo.nombre}
                  </td>
                  <td className="py-3 px-4">{articulo.marca}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {articulo.tipo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
