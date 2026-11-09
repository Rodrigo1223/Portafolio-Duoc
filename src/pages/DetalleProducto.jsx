import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { articulos, agregarAlCarrito } = useInventario();
  const [cantidad, setCantidad] = useState(1);

  // Buscamos el producto usando el ID que viene en la ruta
  const producto = articulos.find(p => p.id === Number(id));

  if (!producto) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Producto no encontrado</h2>
        <button onClick={() => navigate('/inventario')} className="text-emerald-600 underline font-medium">
          Volver al inventario
        </button>
      </div>
    );
  }

  const handleAgregar = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || cantidad > producto.stock) return;

    agregarAlCarrito(producto, cantidad);
    navigate('/carrito');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{producto.nombre}</h2>
      <p className="text-gray-500 mb-4">Marca: <span className="font-semibold text-gray-700">{producto.marca}</span></p>

      <div className="flex items-center gap-4 mb-6">
        <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-semibold">
          {producto.tipo}
        </span>
        <span className="text-2xl font-bold text-gray-900">${producto.precio}</span>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="text-sm text-gray-600">Disponibilidad en bodega:</p>
        <p className={`text-xl font-bold ${producto.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {producto.stock > 0 ? `${producto.stock} unidades disponibles` : 'Sin stock'}
        </p>
      </div>

      <form onSubmit={handleAgregar} className="space-y-4">
        <div>
          <label htmlFor="cant" className="block text-sm font-medium text-gray-700 mb-1">Cantidad a llevar:</label>
          <input
            id="cant"
            type="number"
            min="1"
            max={producto.stock}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            disabled={producto.stock === 0}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          disabled={producto.stock === 0}
          className={`w-full py-3 rounded-md text-white font-bold transition ${
            producto.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
          }`}
        >
          {producto.stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
        </button>
      </form>
    </div>
  );
}