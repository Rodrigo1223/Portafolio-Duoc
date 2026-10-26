import React from 'react';

function QuienesSomos() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif' }}>
      
      {/* Banner Principal Quiénes Somos */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        gap: '3rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 450px' }}>
          <h1 style={{ fontSize: '2.4rem', color: '#111827', marginBottom: '1rem', fontWeight: '700' }}>
            Quiénes somos
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7' }}>
            SuperMarket Pro es una empresa nacida en el corazón de la comuna con la firme vocación de entregar alimentos de alta calidad y artículos de primera necesidad a precios convenientes.
          </p>
        </div>
        <div style={{ flex: '1 1 350px' }}>
          <img 
            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80" 
            alt="Nuestro Equipo" 
            style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>

      {/* Nuestro Propósito */}
      <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#111827', marginBottom: '0.75rem', fontWeight: '700' }}>
          Nuestro propósito
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Promovemos la cercanía y el comercio confiable como una forma de mejorar la calidad de vida de las familias locales. Creemos que cada cliente merece atención personalizada y productos frescos todos los días.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #065f46' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#065f46', marginBottom: '0.5rem' }}>Misión</h3>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Generar un espacio de compra cercano y eficiente donde las personas puedan encontrar variedad, frescura y excelente servicio.
            </p>
          </div>
          <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #0369a1' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#0369a1', marginBottom: '0.5rem' }}>Visión</h3>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
              Construir un supermercado participativo, moderno y sostenible, donde la tecnología y el servicio humano caminen juntos.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default QuienesSomos;