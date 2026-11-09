// src/utils/validators.js
import { CATEGORIAS_PRODUCTOS } from './constants';

export const REGEX_TEXTO = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]{3,40}$/;
export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validarProducto = ({ nombre, marca, tipo, stock, precio }) => {
  const errores = {};
  if (!REGEX_TEXTO.test(nombre)) {
    errores.nombre = 'El nombre debe tener entre 3 y 40 caracteres alfanuméricos.';
  }
  if (!REGEX_TEXTO.test(marca)) {
    errores.marca = 'La marca debe tener entre 3 y 40 caracteres alfanuméricos.';
  }
  const categoriasValidas = CATEGORIAS_PRODUCTOS.map(c => c.nombre);
  if (!categoriasValidas.includes(tipo)) {
    errores.tipo = 'Debe seleccionar una categoría válida.';
  }
  if (Number(stock) < 0 || isNaN(stock)) {
    errores.stock = 'El stock debe ser un número mayor o igual a 0.';
  }
  if (Number(precio) <= 0 || isNaN(precio)) {
    errores.precio = 'El precio debe ser un número mayor a 0.';
  }
  return errores;
};