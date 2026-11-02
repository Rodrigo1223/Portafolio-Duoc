import React from 'react';
import imagenNosotros from '../assets/supermercado.jpg';

// Vista de presentacion de la empresa utilizando recursos locales del proyecto
export default function QuienesSomos() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto font-sans">
      
      {/* Banner Principal Quiénes Somos */}
      <div className="flex flex-wrap items-center justify-between gap-12 mb-12">
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Quiénes somos
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            SuperMarket Pro es una empresa nacida en el corazón de la comuna con la firme vocación de entregar alimentos de alta calidad y artículos de primera necesidad a precios convenientes.
          </p>
        </div>
        <div className="flex-1 min-w-[300px]">
          <img 
            src={imagenNosotros} 
            alt="Nuestro Equipo" 
            className="w-full h-64 object-cover rounded-xl shadow-md" 
          />
        </div>
      </div>

      {/* Nuestro Propósito */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Nuestro propósito
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Promovemos la cercanía y el comercio confiable como una forma de mejorar la calidad de vida de las familias locales. Creemos que cada cliente merece atención personalizada y productos frescos todos los días.
        </p>

        {/* Tarjetas de Mision y Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-emerald-700">
            <h3 className="text-lg font-bold text-emerald-800 mb-2">Misión</h3>
            <p className="text-gray-600 text-sm leading-relaxed m-0">
              Generar un espacio de compra cercano y eficiente donde las personas puedan encontrar variedad, frescura y excelente servicio.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-sky-700">
            <h3 className="text-lg font-bold text-sky-800 mb-2">Visión</h3>
            <p className="text-gray-600 text-sm leading-relaxed m-0">
              Construir un supermercado participativo, moderno y sostenible, donde la tecnología y el servicio humano caminen juntos.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
