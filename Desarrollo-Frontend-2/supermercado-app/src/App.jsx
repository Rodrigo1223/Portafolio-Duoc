import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Inicio from './pages/Inicio';
import QuienesSomos from './pages/QuienesSomos';
import Contactanos from './pages/Contactanos';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        
        {/* Contenido dinámico según la ruta */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </div>

        {/* Menú de navegación inferior exigido por la pauta */}
        <Navigation />
        
      </div>
    </Router>
  );
}

export default App;