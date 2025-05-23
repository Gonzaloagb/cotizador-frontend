import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function LineaHospitalaria() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.edabastecimientosyservicios.com.ar/PERSONAL_CotizadorOnlineMySQL/servicio/productos/index.php");
      const data = await res.json();
      setProductos(data);
    };

    fetchData();
  }, []);

  const productosFiltrados = productos?.filter(
    (p) => p.categoria?.toLowerCase().trim() === 'hospitalaria'
  );

  return (
    <Layout>
      <Head>
        <title>Línea Hospitalaria | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered mb-6">Línea Hospitalaria</h1>

          {productosFiltrados.length === 0 ? (
            <p className="has-text-centered">No hay productos disponibles en esta línea.</p>
          ) : (
            <div className="columns is-multiline">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="column is-4">
                  <div className="box" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', height: '100%' }}>
                    <Link href={`/producto/${producto.id}`}>
                      <a>
                        <figure className="image is-4by3">
                          <img src={producto.imagen} alt={producto.nombre} style={{ objectFit: 'cover', width: '100%' }} />
                        </figure>
                        <h2 className="title is-5 mt-3">{producto.nombre}</h2>
                        <p className="has-text-grey">{producto.descripcion}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
