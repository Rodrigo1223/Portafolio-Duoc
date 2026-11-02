import React from 'react';

export default function FeatureCard({ titulo, descripcion, imagen }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md">
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo} 
          className="w-full h-36 object-cover rounded-md mb-4" 
        />
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{titulo}</h3>
      <p className="text-sm text-gray-600 leading-relaxed m-0">{descripcion}</p>
    </div>
  );
}
