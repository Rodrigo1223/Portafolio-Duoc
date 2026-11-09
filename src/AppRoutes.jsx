import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Inicio from './pages/Inicio';
import VerInventario from './pages/VerInventario'; // <--- Usamos VerInventario
import DetalleProducto from './pages/DetalleProducto';
import IngresarArticulo from './pages/IngresarArticulo';
import Carrito from './pages/Carrito';
import Contactanos from './pages/Contactanos';

export default function AppRoutes() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inventario" element={<VerInventario />} /> {/* <--- Apunta a VerInventario */}
          <Route path="/inventario/:id" element={<DetalleProducto />} />
          <Route path="/ingresar" element={<IngresarArticulo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contactanos />} />
          <Route path="*" element={<div className="text-center py-12 text-xl font-bold text-gray-600">Página no encontrada (404)</div>} />
        </Routes>
      </main>
    </div>
  );
}