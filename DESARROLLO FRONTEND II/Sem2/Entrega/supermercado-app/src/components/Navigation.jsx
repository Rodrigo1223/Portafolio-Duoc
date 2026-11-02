import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const enlaces = [
    { to: "/", label: "Inicio", end: true },
    { to: "/quienes-somos", label: "Quiénes Somos", end: false },
    { to: "/contactanos", label: "Contáctanos", end: false },
    { to: "/inventario", label: "Inventario", end: false },
    { to: "/agregar-producto", label: "Agregar Producto", end: false }
  ];

  return (
    <nav className="flex flex-wrap gap-4 px-6 py-4 bg-white shadow-sm border-b border-gray-100">
      {enlaces.map((enlace) => (
        <NavLink 
          key={enlace.to}
          to={enlace.to} 
          end={enlace.end}
          className={({ isActive }) => `
            text-sm font-medium transition-colors duration-200 decoration-none rounded px-2 py-1
            ${isActive ? 'font-bold text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'}
          `}
        >
          {enlace.label}
        </NavLink>
      ))}
    </nav>
  );
}
