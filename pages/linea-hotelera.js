import Head from 'next/head';
import Layout from '../components/Layout';

export default function LineaHotelera({ productos }) {
  const productosFiltrados = productos?.filter(
    (p) => p.categoria?.toLowerCase().trim() === 'hotelera'
  );

  return (
    <Layout>
      <Head>
        <title>Línea Hotelera | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered mb-6">Línea Hotelera</h1>

          {productosFiltrados.length === 0 ? (
            <p className="has-text-centered">No hay productos disponibles en esta línea.</p>
          ) : (
            <div className="columns is-multiline">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="column is-4">
                  <div
                    className="box"
                    style={{
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      height: '100%',
                    }}
                  >
                    <a href={`/producto/${producto.id}`}>
                      <figure className="image is-4by3">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          style={{ objectFit: 'cover', width: '100%' }}
                        />
                      </figure>
                      <h2 className="title is-5 mt-3">{producto.nombre}</h2>
                      <p className="has-text-grey">{producto.descripcion}</p>
                    </a>
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

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/servicio/productos/index.php`);
    const productos = await res.json();
    return { props: { productos } };
  } catch (error) {
    console.error('Error al conectar con el backend:', error.message);
    return { props: { productos: [] } };
  }
}
