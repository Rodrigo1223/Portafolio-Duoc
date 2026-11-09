import { useInventario } from '../context/InventarioContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Carrito() {
  const { carrito, modificarCantidadCarrito, finalizarCompra } = useInventario();
  const navigate = useNavigate();

  const totalPagar = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const handleFinalizar = () => {
    if (carrito.length === 0) return;
    finalizarCompra();
    alert('¡Compra finalizada con éxito! El inventario ha sido actualizado y el carrito se ha vaciado.');
    navigate('/inventario');
  };

  if (carrito.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">Tu carrito está vacío 🛒</h2>
        <p className="text-gray-500 mb-6">Explora el inventario para agregar productos.</p>
        <Link to="/inventario" className="bg-emerald-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-emerald-700 transition">
          Ver Inventario
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Carrito de Compras</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-700">
              <th className="p-3">Producto</th>
              <th className="p-3">Precio Unitario</th>
              <th className="p-3 text-center">Cantidad</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map(item => (
              <tr key={item.id} className="border-b">
                <td className="p-3 font-medium text-gray-800">{item.nombre}</td>
                <td className="p-3 text-gray-600">${item.precio}</td>
                <td className="p-3 text-center">
                  <div className="inline-flex items-center gap-2">
                    <button
                      onClick={() => modificarCantidadCarrito(item.id, -1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2.5 py-1 rounded font-bold transition"
                    >
                      -
                    </button>
                    <span className="font-semibold px-2">{item.cantidad}</span>
                    <button
                      onClick={() => modificarCantidadCarrito(item.id, 1)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2.5 py-1 rounded font-bold transition"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3 font-bold text-gray-800">${item.precio * item.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-bold text-gray-800">
          Total a Pagar: <span className="text-emerald-600">${totalPagar}</span>
        </h3>
        <button
          onClick={handleFinalizar}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-md transition shadow"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}