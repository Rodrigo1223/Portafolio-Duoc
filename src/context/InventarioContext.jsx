import { createContext, useContext, useState } from 'react';

const InventarioContext = createContext();

export function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState([
    { id: 1, nombre: 'Leche Entera 1L', marca: 'Colun', tipo: 'Lácteos', stock: 12, precio: 1100 },
    { id: 2, nombre: 'Arroz Grado 1 1kg', marca: 'Tucapel', tipo: 'Abarrotes', stock: 20, precio: 1450 },
    { id: 3, nombre: 'Manzana Fuji 1kg', marca: 'Granja', tipo: 'Frutas y Verduras', stock: 15, precio: 1200 },
    { id: 4, nombre: 'Bebida Cero 1.5L', marca: 'Coca-Cola', tipo: 'Bebidas', stock: 8, precio: 1600 }
  ]);

  const [carrito, setCarrito] = useState([]);

  const agregarArticulo = (nuevoArticulo) => {
    setArticulos(prev => [
      ...prev,
      {
        ...nuevoArticulo,
        id: Date.now(),
        stock: Number(nuevoArticulo.stock) || 0,
        precio: Number(nuevoArticulo.precio) || 0
      }
    ]);
  };

  const agregarAlCarrito = (producto, cantidadSeleccionada) => {
    const cantidad = Number(cantidadSeleccionada);
    if (cantidad <= 0) return;

    const itemEnBodega = articulos.find(item => item.id === producto.id);
    if (!itemEnBodega || itemEnBodega.stock < cantidad) {
      alert('No hay suficiente stock disponible en la bodega.');
      return;
    }

    setArticulos(prev =>
      prev.map(item =>
        item.id === producto.id ? { ...item, stock: item.stock - cantidad } : item
      )
    );

    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  const modificarCantidadCarrito = (productoId, delta) => {
    const itemEnCarrito = carrito.find(item => item.id === productoId);
    if (!itemEnCarrito) return;

    if (delta > 0) {
      const itemInventario = articulos.find(item => item.id === productoId);
      if (!itemInventario || itemInventario.stock < 1) {
        alert('Stock agotado en bodega.');
        return;
      }

      setArticulos(prev =>
        prev.map(item => item.id === productoId ? { ...item, stock: item.stock - 1 } : item)
      );
      setCarrito(prev =>
        prev.map(item => item.id === productoId ? { ...item, cantidad: item.cantidad + 1 } : item)
      );
    } else if (delta < 0) {
      setArticulos(prev =>
        prev.map(item => item.id === productoId ? { ...item, stock: item.stock + 1 } : item)
      );
      setCarrito(prev =>
        prev
          .map(item => item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item)
          .filter(item => item.cantidad > 0)
      );
    }
  };

  // Función para vaciar el carrito al finalizar la compra exitosamente
  const finalizarCompra = () => {
    setCarrito([]);
  };

  return (
    <InventarioContext.Provider value={{
      articulos,
      carrito,
      agregarArticulo,
      agregarAlCarrito,
      modificarCantidadCarrito,
      finalizarCompra
    }}>
      {children}
    </InventarioContext.Provider>
  );
}

export const useInventario = () => useContext(InventarioContext);