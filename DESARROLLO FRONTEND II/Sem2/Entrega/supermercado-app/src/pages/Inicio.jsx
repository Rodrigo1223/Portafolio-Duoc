import React from 'react';
import FeatureCard from '../components/FeatureCard';

// Importacion de recursos graficos locales del portafolio
import imgFrescos from '../assets/frutas_verduras_fresacas.avif';
import imgCompra from '../assets/compra_rapida_supermercado.avif';
import imgDescuentos from '../assets/compromiso_vecinal_sepermercado.jpg';
import imgAtencion from '../assets/pasillo_supermercado.avif';

export default function Inicio() {
  // Arreglo indexado con la informacion comercial y sus respectivas imagenes locales
  const features = [
    {
      titulo: "Productos Frescos",
      descripcion: "Frutas, verduras y carnes locales todos los días para garantizar la máxima calidad en tu mesa.",
      imagen: imgFrescos
    },
    {
      titulo: "Compra Rápida",
      descripcion: "Navega por nuestro inventario actualizado en tiempo real y encuentra lo que necesitas en pocos clics.",
      imagen: imgCompra
    },
    {
      titulo: "Descuentos Especiales",
      descripcion: "Aprovecha nuestras ofertas semanales y promociones exclusivas diseñadas para cuidar tu bolsillo.",
      imagen: imgDescuentos
    },
    {
      titulo: "Atención Personalizada",
      descripcion: "Estamos disponibles para resolver tus dudas y ayudarte a través de nuestro formulario de contacto.",
      imagen: imgAtencion
    }
  ];

  return (
    <div className="space-y-4 py-4">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Bienvenido a Nuestro Supermercado</h1>
      <p className="text-lg text-gray-600 max-w-2xl">Tu mejor opción para encontrar calidad, frescura y economía en un solo lugar.</p>
      
      {/* Grid dinamico que itera el arreglo renderizando el componente optimizado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((item, index) => (
          <FeatureCard 
            key={index} 
            titulo={item.titulo} 
            descripcion={item.descripcion} 
            imagen={item.imagen}
          />
        ))}
      </div>
    </div>
  );
}
