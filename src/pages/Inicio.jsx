import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import pasilloImg from '../assets/pasillo_supermercado.avif';
import frutasImg from '../assets/frutas_verduras_fresacas.avif';
import compromisoImg from '../assets/compromiso_vecinal_sepermercado.jpg';

export default function Inicio() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Banner Principal con Hero y Supermercado */}
      <div className="bg-emerald-800 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 md:w-1/2">
          <span className="bg-emerald-700 text-emerald-100 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
            Evaluación Semana 3 - Duoc UC
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            SuperMercado Pro - Gestión Inteligente
          </h1>
          <p className="text-emerald-100 text-lg">
            Control total de inventario, stock en tiempo real y administración ágil de carritos de compra con React Avanzado y Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link 
              to="/inventario" 
              className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition"
            >
              Ver Inventario y Filtros
            </Link>
            <Link 
              to="/ingresar" 
              className="bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl border border-emerald-600 hover:bg-emerald-950 transition"
            >
              Ingresar Producto
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <img 
            src={heroImg} 
            alt="Supermercado Pro Hero" 
            className="rounded-xl shadow-lg object-cover w-full h-72 border-2 border-emerald-600/50"
          />
        </div>
      </div>

      {/* Sección de Tarjetas visuales usando tus imágenes locales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
          <img src={pasilloImg} alt="Pasillo Supermercado" className="h-48 w-full object-cover" />
          <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">📦 Pasillos y Stock</h2>
              <p className="text-gray-600 text-sm mt-1">
                Revisa los productos disponibles, filtra por categoría de manera dinámica y controla el stock restante en bodega.
              </p>
            </div>
            <Link to="/inventario" className="text-emerald-600 font-semibold text-sm hover:underline mt-4 inline-block">
              Ir al inventario &rarr;
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
          <img src={frutasImg} alt="Frutas y Verduras Frescas" className="h-48 w-full object-cover" />
          <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">🍎 Frescura y Calidad</h2>
              <p className="text-gray-600 text-sm mt-1">
                Gestión avanzada de artículos frescos y abarrotes con iconos dedicados y validaciones seguras mediante expresiones regulares.
              </p>
            </div>
            <Link to="/ingresar" className="text-emerald-600 font-semibold text-sm hover:underline mt-4 inline-block">
              Agregar artículos &rarr;
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
          <img src={compromisoImg} alt="Compromiso Vecinal" className="h-48 w-full object-cover" />
          <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">🛒 Carrito Global</h2>
              <p className="text-gray-600 text-sm mt-1">
                Simula compras con actualización de inventario en tiempo real utilizando Context API y estado funcional (<code className="bg-gray-100 px-1 rounded text-emerald-700">prev</code>).
              </p>
            </div>
            <Link to="/carrito" className="text-emerald-600 font-semibold text-sm hover:underline mt-4 inline-block">
              Ver carrito &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}