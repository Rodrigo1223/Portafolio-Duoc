import React, { createContext, useState, useContext } from 'react';

const InventarioContext = createContext();

export function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState([
    { id: 1, nombre: 'Fideos Spaguetti N°5', marca: 'Carozzi', tipo: 'Abarrotes' },
    { id: 2, nombre: 'Leche Entera Colun 1L', marca: 'Colun', tipo: 'Lácteos' }
  ]);

  const agregarArticulo = (nuevoArticulo) => {
    setArticulos([...articulos, { ...nuevoArticulo, id: Date.now() }]);
  };

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  );
}

export function useInventario() {
  return useContext(InventarioContext);
}
