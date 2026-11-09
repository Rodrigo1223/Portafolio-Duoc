import { Link } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

export default function Navigation() {
  const { carrito } = useInventario();
  const totalCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-emerald-400 flex items-center gap-2">
          🛒 SuperMercado Pro
        </Link>
        <div className="flex gap-6 items-center font-medium">
          <Link to="/" className="hover:text-emerald-400 transition">Inicio</Link>
          <Link to="/inventario" className="hover:text-emerald-400 transition">Inventario</Link>
          <Link to="/ingresar" className="hover:text-emerald-400 transition">Ingresar Artículo</Link>
          <Link to="/carrito" className="hover:text-emerald-400 transition bg-emerald-700 px-3 py-1.5 rounded-lg">
            Carrito ({totalCarrito})
          </Link>
        </div>
      </div>
    </nav>
  );
}