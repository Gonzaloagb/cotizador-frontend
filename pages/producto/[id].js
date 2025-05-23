import { useRouter } from 'next/router';
import { useCotizacion } from '@/context/CotizacionContext';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function DetalleProducto() {
  const router = useRouter();
  const { id } = router.query;
  const { agregarProducto } = useCotizacion();

  const [producto, setProducto] = useState(null);
  const [medidaSeleccionada, setMedidaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (!id) return;
    const fetchProducto = async () => {
      const res = await fetch(`https://api.edabastecimientosyservicios.com.ar/PERSONAL_CotizadorOnlineMySQL/servicio/productos/show.php?id=${id}`);
      const data = await res.json();
      setProducto(data);
    };
    fetchProducto();
  }, [id]);

  const handleAgregar = () => {
    if (!medidaSeleccionada) {
      alert('Seleccioná una medida');
      return;
    }

    const productoSeleccionado = {
      id: producto.id,
      nombre: producto.nombre,
      medidaSeleccionada,
      cantidad: parseInt(cantidad),
    };

    agregarProducto(productoSeleccionado);
    alert('Producto agregado a la cotización');
  };

  if (!producto) return <Layout><p className="section">Cargando producto...</p></Layout>;

  return (
    <Layout>
      <Head>
        <title>{producto.nombre} | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure className="image is-4by3">
                <img src={producto.imagen} alt={producto.nombre} style={{ objectFit: 'cover', width: '100%' }} />
              </figure>
            </div>
            <div className="column is-6">
              <h1 className="title">{producto.nombre}</h1>
              <p className="mb-4">{producto.descripcion}</p>

              {producto.medidas?.length > 0 && (
                <div className="field">
                  <label className="label">Medida</label>
                  <div className="control">
                    <div className="select">
                      <select value={medidaSeleccionada} onChange={(e) => setMedidaSeleccionada(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {producto.medidas.map((m, idx) => (
                          <option key={idx} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="field mt-3">
                <label className="label">Cantidad</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                </div>
              </div>

              <div className="buttons mt-5">
                <button className="button is-success" onClick={handleAgregar}>
                  Agregar a cotización
                </button>
                <button className="button" onClick={() => router.back()}>
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
