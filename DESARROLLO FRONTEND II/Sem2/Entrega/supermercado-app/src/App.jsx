import React, { useState } from 'react';
import { InventarioProvider } from './context/InventarioContext';

import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import Contactanos from './pages/Contactanos';
import VerInventario from './pages/VerInventario';
import IngresarArticulo from './pages/IngresarArticulo';

function ContenidoApp() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  const renderPagina = () => {
    switch (paginaActual) {
      case 'inicio':
        return <Inicio />;
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'contactanos':
        return <Contactanos />;
      case 'inventario':
        return <VerInventario />;
      case 'agregar-producto':
        return <IngresarArticulo setPaginaActual={setPaginaActual} />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
          <span className="font-bold text-blue-600 text-lg">🛒 SuperMarket Pro</span>
          <div className="flex space-x-1 h-full">
            <button 
              onClick={() => setPaginaActual('inicio')}
              className={`px-3 h-full text-sm font-semibold transition-colors ${
                paginaActual === 'inicio' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              Inicio
            </button>

            <button 
              onClick={() => setPaginaActual('quienes-somos')}
              className={`px-3 h-full text-sm font-semibold transition-colors ${
                paginaActual === 'quienes-somos' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              Nosotros
            </button>

            <button 
              onClick={() => setPaginaActual('contactanos')}
              className={`px-3 h-full text-sm font-semibold transition-colors ${
                paginaActual === 'contactanos' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              Contacto
            </button>

            <button 
              onClick={() => setPaginaActual('inventario')}
              className={`px-3 h-full text-sm font-semibold transition-colors ${
                paginaActual === 'inventario' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              Inventario
            </button>

            <button 
              onClick={() => setPaginaActual('agregar-producto')}
              className={`px-3 h-full text-sm font-semibold transition-colors ${
                paginaActual === 'agregar-producto' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              Añadir
            </button>
          </div>
        </div>
      </nav>

      <div className="flex-1 max-w-6xl w-full mx-auto p-6">
        {renderPagina()}
      </div>

    </div>
  );
}

export default function App() {
  return (
    <InventarioProvider>
      <ContenidoApp />
    </InventarioProvider>
  );
}
