import { createContext, useContext, useState, useEffect } from 'react';

const CotizacionContext = createContext();

export const CotizacionProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const guardado = localStorage.getItem('cotizacion');
    if (guardado) {
      setItems(JSON.parse(guardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cotizacion', JSON.stringify(items));
  }, [items]);

  const agregarProducto = (producto) => {
    setItems(prev => [...prev, producto]);
  };

  const quitarProducto = (id, medidaSeleccionada) => {
    setItems(prev => prev.filter(p =>
      !(p.id === id && p.medidaSeleccionada === medidaSeleccionada)
    ));
  };

  const vaciarCotizacion = () => {
    setItems([]);
  };

  return (
    <CotizacionContext.Provider value={{ items, agregarProducto, quitarProducto, vaciarCotizacion }}>
      {children}
    </CotizacionContext.Provider>
  );
};

export const useCotizacion = () => useContext(CotizacionContext);
