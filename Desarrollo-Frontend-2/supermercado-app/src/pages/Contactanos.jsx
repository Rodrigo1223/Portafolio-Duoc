import React, { useState } from 'react';

export default function Contactanos() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>📞 Contáctanos</h2>
      <p style={styles.cardSubtitle}>¿Tienes dudas con el inventario o requerimientos de proveedores? Escríbenos:</p>
      
      {enviado ? (
        <div style={styles.successBox}>
          ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre:</label>
            <input type="text" required style={styles.input} placeholder="Ej. Juan Pérez" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo Electrónico:</label>
            <input type="email" required style={styles.input} placeholder="correo@ejemplo.cl" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mensaje:</label>
            <textarea rows="4" required style={styles.textarea} placeholder="Escriba su requerimiento aquí..."></textarea>
          </div>
          <button type="submit" style={styles.button}>Enviar Mensaje</button>
        </form>
      )}
    </div>
  );
}

const styles = {
  card: { backgroundColor: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  cardTitle: { margin: 0, color: '#1e293b', fontSize: '1.25rem' },
  cardSubtitle: { color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  label: { fontSize: '0.9rem', fontWeight: '500', color: '#475569' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
  textarea: { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none', resize: 'vertical' },
  button: { backgroundColor: '#0f172a', color: 'white', padding: '12px', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' },
  successBox: { backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '1rem', borderRadius: '6px', textAlign: 'center', fontWeight: '500' },
};