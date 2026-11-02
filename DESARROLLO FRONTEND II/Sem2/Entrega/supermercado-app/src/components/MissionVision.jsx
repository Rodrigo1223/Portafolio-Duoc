export default function MissionVision() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
      <div className="card">
        <h2>Nuestra Misión</h2>
        <p>Entregar a nuestros clientes productos de la más alta calidad y frescura, garantizando un servicio cercano, rápido y precios justos que apoyen la economía del hogar.</p>
      </div>
      <div className="card">
        <h2>Nuestra Visión</h2>
        <p>Ser el supermercado referente y líder en nuestra comunidad, reconocido por la excelencia en el servicio, la variedad de productos locales y la innovación constante.</p>
      </div>
    </div>
  );
}