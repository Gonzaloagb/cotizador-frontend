import { useCotizacion } from '../context/CotizacionContext';
import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Cotizacion() {
  const { items, quitarProducto, vaciarCotizacion } = useCotizacion();

  const [nombre, setNombre] = useState('');
  const [provincia, setProvincia] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [mensajeExtra, setMensajeExtra] = useState('');
  const [errores, setErrores] = useState({});

  const generarMensaje = () => {
    if (items.length === 0) return '';

    const productos = items.map((item) =>
      `• ${item.nombre}\n  - Medida: ${item.medidaSeleccionada || 'N/A'}\n  - Cantidad: ${item.cantidad}`
    ).join('\n\n');

    let mensaje = `Hola, soy ${nombre || 'un cliente'} de ${provincia || 'una provincia'}`;
    if (localidad.trim()) {
      mensaje += ` (${localidad.trim()})`;
    }
    mensaje += `.\nMe gustaría una cotización de los siguientes productos:\n\n${productos}`;

    if (mensajeExtra.trim()) {
      mensaje += `\n\nComentario adicional:\n${mensajeExtra.trim()}`;
    }

    return encodeURIComponent(mensaje);
  };

  const whatsappURL = `https://wa.me/5491167411965?text=${generarMensaje()}`;

  const enviarCotizacion = () => {
    const nuevosErrores = {};
    if (!nombre) nuevosErrores.nombre = true;
    if (!provincia) nuevosErrores.provincia = true;

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      alert('Por favor completá los campos obligatorios.');
      return;
    }

    setErrores({});
    window.open(whatsappURL, '_blank');
    vaciarCotizacion();
  };

  return (
    <Layout>
      <Head>
        <title>Cotización | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title">Cotización</h1>

          {items.length === 0 ? (
            <p>No hay productos seleccionados.</p>
          ) : (
            <>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Medida</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id + item.medidaSeleccionada}>
                      <td>{item.nombre}</td>
                      <td>{item.medidaSeleccionada}</td>
                      <td>{item.cantidad}</td>
                      <td>
                        <button className="delete" onClick={() => quitarProducto(item.id, item.medidaSeleccionada)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="field">
                <label className="label">Tu nombre *</label>
                <div className="control">
                  <input
                    className={`input ${errores.nombre ? 'is-danger' : ''}`}
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">Provincia *</label>
                    <div className="control">
                      <div className={`select is-fullwidth ${errores.provincia ? 'is-danger' : ''}`}>
                        <select value={provincia} onChange={e => setProvincia(e.target.value)}>
                          <option value="">Seleccionar provincia</option>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                          <option value="Córdoba">Córdoba</option>
                          <option value="Santa Fe">Santa Fe</option>
                          <option value="Mendoza">Mendoza</option>
                          <option value="Otra">Otra</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Localidad</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ej. Merlo"
                        value={localidad}
                        onChange={e => setLocalidad(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Mensaje adicional (opcional)</label>
                <div className="control">
                  <textarea className="textarea" value={mensajeExtra} onChange={e => setMensajeExtra(e.target.value)} />
                </div>
              </div>

            <button
              id="btn-enviar-cotizacion"
              onClick={enviarCotizacion}
              className="button is-success mt-4"
            >
              Enviar cotización por WhatsApp
            </button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
