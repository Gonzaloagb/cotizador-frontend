import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function MisCotizaciones() {
  const { usuario } = useAuth();
  const router = useRouter();
  const [cotizaciones, setCotizaciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access');

    if (!token) {
      router.push('/login');
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cotizaciones/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 401) {
          router.push('/login');
        }
        return res.json();
      })
      .then(data => {
        setCotizaciones(data);
        setCargando(false);
      });
  }, [router]);

  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="title">Mis Cotizaciones</h1>

        {cargando ? (
          <p>Cargando cotizaciones...</p>
        ) : cotizaciones.length === 0 ? (
          <p>No hay cotizaciones guardadas aún.</p>
        ) : (
          cotizaciones.map((c) => (
            <div className="box mb-4" key={c.id}>
              <h2 className="subtitle">
                Cotización del {new Date(c.fecha).toLocaleDateString()} —{' '}
                <span className={`tag ${c.estado === 'respondida' ? 'is-success' : 'is-warning'}`}>
                  {c.estado === 'respondida' ? 'Respondida' : 'Pendiente'}
                </span>
              </h2>

              <ul>
                {c.productos.map((prod, index) => (
                  <li key={index}>
                    • <strong>{prod.nombre}</strong> — {prod.cantidad} unidades, medida: {prod.medidaSeleccionada || 'N/A'}
                  </li>
                ))}
              </ul>

              {c.archivo && (
                <p className="mt-2">
                  <strong>Presupuesto adjunto:</strong>{' '}
                  <a
                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}${c.archivo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver archivo
                  </a>
                </p>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </Layout>
  );
}
