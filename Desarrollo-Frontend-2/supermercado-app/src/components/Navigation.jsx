import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <footer style={{ background: '#111827', color: '#ffffff', padding: '1.2rem 0', textAlign: 'center', borderTop: '4px solid #374151' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '500' }}>
          Inicio
        </Link>
        <Link to="/quienes-somos" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '500' }}>
          Quiénes Somos
        </Link>
        <Link to="/contactanos" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: '500' }}>
          Contáctanos
        </Link>
      </nav>
    </footer>
  );
}

export default Navigation;