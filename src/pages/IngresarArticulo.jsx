import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

export default function IngresarArticulo() {
  const { agregarArticulo } = useInventario();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    marca: '',
    tipo: 'Abarrotes',
    precio: '',
    stock: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre.trim() || !form.marca.trim()) {
      setError('Por favor, completa todos los campos de texto.');
      return;
    }

    const precioNum = Number(form.precio);
    const stockNum = Number(form.stock);

    if (isNaN(precioNum) || precioNum <= 0) {
      setError('El precio debe ser un número mayor a 0.');
      return;
    }

    if (isNaN(stockNum) || stockNum < 0) {
      setError('El stock debe ser un número válido (0 o mayor).');
      return;
    }

    agregarArticulo({
      nombre: form.nombre.trim(),
      marca: form.marca.trim(),
      tipo: form.tipo,
      precio: precioNum,
      stock: stockNum
    });

    navigate('/inventario');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md mt-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Ingresar Nuevo Artículo al Inventario
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Artículo:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Azúcar Iansa"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marca:</label>
          <input
            type="text"
            name="marca"
            value={form.marca}
            onChange={handleChange}
            required
            placeholder="Ej: Iansa"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría / Tipo:</label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Carnes y Pescados">Carnes y Pescados</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio ($):</label>
            <input
              type="number"
              name="precio"
              min="1"
              value={form.precio}
              onChange={handleChange}
              required
              placeholder="Ej: 1200"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Inicial:</label>
            <input
              type="number"
              name="stock"
              min="1"
              value={form.stock}
              onChange={handleChange}
              required
              placeholder="Ej: 20"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition shadow"
        >
          Guardar y Registrar Producto
        </button>
      </form>
    </div>
  );
}