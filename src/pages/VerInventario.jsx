import React, { useState } from 'react';
import { useInventario } from '../context/InventarioContext';
import { Link } from 'react-router-dom';

export default function VerInventario() {
  const { articulos } = useInventario();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Función auxiliar para asignar íconos según la categoría
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

  // Filtrar artículos dinámicamente sin perder los datos originales
  const articulosFiltrados = categoriaSeleccionada === 'Todas'
    ? articulos
    : articulos.filter(item => item.tipo === categoriaSeleccionada);

  const categorias = ['Todas', 'Abarrotes', 'Lácteos', 'Carnes y Pescados', 'Limpieza', 'Frutas y Verduras'];

  return (
    <div className="max-w-6xl mx-auto p-6 my-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          Inventario Actual y Filtrado
        </h2>

        {/* Selector de Filtro por Categoría (Exigencia de Pauta) */}
        <div className="mb-6 flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-gray-700 mr-2">Filtrar por categoría:</span>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                categoriaSeleccionada === cat
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {articulosFiltrados.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No hay artículos registrados en esta categoría.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold">Nombre Artículo</th>
                  <th className="py-3 px-4 font-semibold">Marca</th>
                  <th className="py-3 px-4 font-semibold">Tipo / Categoría</th>
                  <th className="py-3 px-4 font-semibold">Stock</th>
                  <th className="py-3 px-4 font-semibold">Precio</th>
                  <th className="py-3 px-4 font-semibold text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
                {articulosFiltrados.map((articulo) => (
                  <tr key={articulo.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-2">
                      <span>{obtenerIcono(articulo.tipo)}</span>
                      {articulo.nombre}
                    </td>
                    <td className="py-3 px-4">{articulo.marca}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        {articulo.tipo}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-800">{articulo.stock} un.</td>
                    <td className="py-3 px-4 font-bold text-gray-900">${articulo.precio}</td>
                    <td className="py-3 px-4 text-center">
                      <Link
                        to={`/inventario/${articulo.id}`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded transition shadow"
                      >
                        Ver Detalle / Comprar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}