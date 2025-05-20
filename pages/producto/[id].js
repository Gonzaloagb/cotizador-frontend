import { useCotizacion } from '../../context/CotizacionContext';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '@/components/Layout';

export default function DetalleProducto({ producto }) {
  const { agregarProducto } = useCotizacion();
  const [medidaSeleccionada, setMedidaSeleccionada] = useState('');
  const [cantidad, setCantidad] = useState(1);

  const agregar = () => {
    if (!medidaSeleccionada) {
      alert('Seleccioná una medida');
      return;
    }

    const productoParaAgregar = {
      id: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      medidaSeleccionada,
      cantidad
    };

    agregarProducto(productoParaAgregar);
    alert('Producto agregado a la cotización');
  };

  return (
    <Layout>
      <Head>
        <title>{`${producto.nombre || ''} | EDAYS`}</title>
      </Head>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure className="image">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </figure>
            </div>

            <div className="column is-6">
              <h1 className="title">{producto.nombre}</h1>
              <p className="content">{producto.descripcion}</p>

              <div className="field">
                <label className="label">Medida</label>
                <div className="control">
                  <div className="select">
                    <select value={medidaSeleccionada} onChange={e => setMedidaSeleccionada(e.target.value)}>
                      <option value="">Seleccionar</option>
                      {Array.isArray(producto.medidas) && producto.medidas.map((m, idx) => (
                        <option key={idx} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Cantidad</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={cantidad}
                    min={1}
                    onChange={e => {
                      const value = parseInt(e.target.value);
                      setCantidad(Number.isNaN(value) ? 1 : value);
                    }}
                  />
                </div>
              </div>

              <button className="btn btn-sm btn-primary" onClick={agregar}>
                Agregar a cotización
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/servicio/productos/show.php?id=${params.id}`);
    if (!res.ok) throw new Error("No se encontró el producto");

    const producto = await res.json();

    return {
      props: { producto },
    };
  } catch (error) {
    console.error("❌ Error cargando el producto:", error.message);
    return {
      notFound: true,
    };
  }
}
