import React from 'react';
import { Link } from 'react-router-dom';

// Importaciones con los nombres exactos de tu carpeta assets
import heroImg from '../assets/supermercado.jpg';
import frescosImg from '../assets/frutas_verduras_fresacas.avif';
import variedadImg from '../assets/Imagen Supermercado.webp';
import rapidaImg from '../assets/compra_rapida_supermercado.avif';
import vecinalImg from '../assets/compromiso_vecinal_sepermercado.jpg';

function Inicio() {
  const scrollToValores = () => {
    const section = document.getElementById('valores-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '2.5rem 1.5rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. SECCIÓN HERO / PRESENTACIÓN PRINCIPAL */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        background: '#ffffff', 
        padding: '2.5rem', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        marginBottom: '3rem',
        gap: '2.5rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 450px' }}>
          <h1 style={{ fontSize: '2.4rem', color: '#111827', marginBottom: '1rem', fontWeight: '700' }}>
            SuperMarket Pro
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
            Tu supermercado de barrio con la mejor atención. Llevamos más de 10 años ofreciendo productos frescos, abarrotes y todo lo que necesitas para tu hogar a precios realmente convenientes.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link 
              to="/quienes-somos" 
              style={{ 
                background: '#065f46', 
                color: '#ffffff', 
                padding: '0.7rem 1.4rem', 
                borderRadius: '6px', 
                fontSize: '0.9rem', 
                fontWeight: '600', 
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Conócenos
            </Link>
            <button 
              type="button"
              onClick={scrollToValores}
              style={{ 
                background: '#f3f4f6', 
                color: '#374151', 
                padding: '0.7rem 1.4rem', 
                borderRadius: '6px', 
                fontSize: '0.9rem', 
                fontWeight: '600', 
                border: '1px solid #d1d5db', 
                cursor: 'pointer',
                display: 'inline-block'
              }}
            >
              Nuestros Valores
            </button>
          </div>
        </div>
        
        <div style={{ flex: '1 1 350px', textAlign: 'center' }}>
          <img 
            src={heroImg} 
            alt="Supermercado Local" 
            style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>

      {/* 2. SECCIÓN CARACTERÍSTICAS (4 Tarjetas con sus imágenes correspondientes) */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#111827', marginBottom: '0.5rem', textAlign: 'center', fontWeight: '700' }}>
          ¿Qué encontrarás en nuestro supermercado?
        </h2>
        <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          Trabajamos día a día para entregarte una compra cómoda, rápida y conveniente.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
          
          {/* Tarjeta 1: Productos Frescos */}
          <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '4px solid #065f46', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img src={frescosImg} alt="Productos Frescos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#111827', marginBottom: '0.4rem', fontWeight: '600' }}>Productos Frescos</h3>
                <p style={{ color: '#4b5563', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
                  Frutas y verduras seleccionadas todos los días directamente de productores locales.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Gran Variedad */}
          <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '4px solid #0369a1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img src={variedadImg} alt="Gran Variedad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#111827', marginBottom: '0.4rem', fontWeight: '600' }}>Gran Variedad</h3>
                <p style={{ color: '#4b5563', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
                  Todo en abarrotes, despensa, lácteos y productos de limpieza para tu hogar.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Compra Rápida */}
          <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '4px solid #b45309', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img src={rapidaImg} alt="Compra Rápida" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#111827', marginBottom: '0.4rem', fontWeight: '600' }}>Compra Rápida</h3>
                <p style={{ color: '#4b5563', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
                  Una plataforma web sencilla y ágil para que hagas tus pedidos sin complicaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4: Compromiso Vecinal */}
          <div style={{ background: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: '4px solid #b91c1c', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
              <img src={vecinalImg} alt="Compromiso Vecinal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', color: '#111827', marginBottom: '0.4rem', fontWeight: '600' }}>Compromiso Vecinal</h3>
                <p style={{ color: '#4b5563', fontSize: '0.82rem', lineHeight: '1.4', margin: 0 }}>
                  Atención cálida, cercana y con precios justos para toda nuestra comunidad.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SECCIÓN NUESTROS VALORES */}
      <div id="valores-section" style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#111827', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>
          Lo que nos mueve
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: '#065f46', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Nuestra Misión</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Llevar productos de calidad y a buen precio a los hogares de nuestra comuna, apoyando a los productores de la zona y ofreciendo una atención como la de antes.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#0369a1', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Nuestra Visión</h3>
            <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Seguir siendo el supermercado preferido por las familias del barrio, creciendo junto a nuestros vecinos y mejorando cada día nuestro servicio.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Inicio;