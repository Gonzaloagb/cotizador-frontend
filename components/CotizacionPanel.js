import { useState } from 'react';
import { useCotizacion } from '../context/CotizacionContext';
import { useRouter } from 'next/router';

export default function CotizacionPanel() {
  const { items, quitarProducto } = useCotizacion();
  const [abierto, setAbierto] = useState(false);
  const router = useRouter();

  const toggle = () => setAbierto(!abierto);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      <button className="btn btn-sm btn-primary ml-4" onClick={toggle}>
        {abierto ? 'Cerrar cotización' : `🛒 Cotización (${items.length})`}
      </button>

      {abierto && (
        <div className="box mt-2" style={{ width: '300px' }}>
          <h4 className="title is-6">Productos seleccionados:</h4>
          {items.length === 0 ? (
            <p>No hay productos aún.</p>
          ) : (
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
              <ul>
                {items.map((item, index) => (
                  <li key={`${item.id}_${item.medidaSeleccionada}_${index}`} className="mb-2">
                    <strong>{item.nombre}</strong><br />
                    <small>Medida: {item.medidaSeleccionada || 'N/A'} | Cant: {item.cantidad}</small>
                    <br />
                    <button
                      className="delete is-small mt-1"
                      onClick={() => quitarProducto(item.id, item.medidaSeleccionada)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {items.length > 0 && (
            <button
              className="btn btn-sm btn-success ml-4"
              onClick={() => router.push('/cotizacion')}
            >
              Finalizar cotización
            </button>
          )}
        </div>
      )}
    </div>
  );
}


useEffect(() => {
  console.log("🧠 Cotización cargada en panel:", items);
}, [items]);
