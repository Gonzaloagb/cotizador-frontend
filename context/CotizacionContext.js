import { createContext, useContext, useState } from 'react';

const CotizacionContext = createContext();

export function CotizacionProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregarProducto = (nuevo) => {
    setItems((prev) => [...prev, nuevo]);
  };

  const quitarProducto = (id, medida) => {
    setItems(prev =>
      prev.filter(p => !(p.id === id && p.medidaSeleccionada === medida))
    );
  };

  const vaciarCotizacion = () => {
    setItems([]);
  };

  return (
    <CotizacionContext.Provider value={{ items, agregarProducto, quitarProducto, vaciarCotizacion }}>
      {children}
    </CotizacionContext.Provider>
  );
}

export const useCotizacion = () => useContext(CotizacionContext);
