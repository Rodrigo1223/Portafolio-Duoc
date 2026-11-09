// src/utils/constants.js
export const CATEGORIAS_PRODUCTOS = [
  { id: 'lacteos', nombre: 'Lácteos', icono: '🥛' },
  { id: 'abarrotes', nombre: 'Abarrotes', icono: '🌾' },
  { id: 'frutas', nombre: 'Frutas y Verduras', icono: '🍎' },
  { id: 'bebidas', nombre: 'Bebidas', icono: '🥤' },
  { id: 'carnes', nombre: 'Carnes', icono: '🥩' }
];

export const OBTENER_ICONO = (tipo) => {
  const encontrada = CATEGORIAS_PRODUCTOS.find(c => c.nombre.toLowerCase() === tipo.toLowerCase());
  return encontrada ? encontrada.icono : '📦';
};