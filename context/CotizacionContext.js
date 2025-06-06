import { createContext, useContext, useState, useEffect } from 'react';

const CotizacionContext = createContext();

export const CotizacionProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const guardado = localStorage.getItem('cotizacion');
      if (guardado) {
        try {
          setItems(JSON.parse(guardado));
        } catch (e) {
          console.error("❌ Error parseando localStorage:", e);
        }
      }
      setCargado(true);
    }
  }, []);

  useEffect(() => {
    if (cargado && typeof window !== 'undefined') {
      localStorage.setItem('cotizacion', JSON.stringify(items));
    }
  }, [items, cargado]);

  const agregarProducto = (producto) => {
    setItems((prev) => {
      const clave = `${producto.id}_${producto.medidaSeleccionada}`;
      const existente = prev.find(
        (p) => `${p.id}_${p.medidaSeleccionada}` === clave
      );

      if (existente) {
        return prev.map((p) =>
          `${p.id}_${p.medidaSeleccionada}` === clave
            ? { ...p, cantidad: p.cantidad + producto.cantidad }
            : p
        );
      } else {
        return [...prev, producto];
      }
    });
  };

  const quitarProducto = (id, medidaSeleccionada) => {
    setItems((prev) =>
      prev.filter((p) => !(p.id === id && p.medidaSeleccionada === medidaSeleccionada))
    );
  };

  const vaciarCotizacion = () => setItems([]);

  return (
    <CotizacionContext.Provider value={{ items, agregarProducto, quitarProducto, vaciarCotizacion }}>
      {cargado ? children : null}
    </CotizacionContext.Provider>
  );
};

export const useCotizacion = () => useContext(CotizacionContext);
