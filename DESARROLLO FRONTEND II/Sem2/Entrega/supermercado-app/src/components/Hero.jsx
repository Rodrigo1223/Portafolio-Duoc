export default function Hero({ titulo, subtitulo }) {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(to right, #f8fafc, #e2e8f0)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>{titulo}</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '700px', margin: '0 auto' }}>{subtitulo}</p>
    </div>
  );
}