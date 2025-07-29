import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [linea, setLinea] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const generarMensaje = () => {
    let texto = `Hola, soy ${nombre} de la empresa ${empresa}.\n`;
    texto += `Correo: ${email}\nTeléfono: ${telefono}\n\n`;
    texto += `Estoy interesado/a en productos de la línea: ${linea}\n\n`;
    if (mensaje.trim()) {
      texto += `Comentario adicional:\n${mensaje.trim()}\n\n`;
    }
    texto += `Gracias.`;
    return encodeURIComponent(texto);
  };

  const enviarWhatsapp = () => {
    const nuevosErrores = {};
    if (!nombre) nuevosErrores.nombre = true;
    if (!empresa) nuevosErrores.empresa = true;
    if (!telefono) nuevosErrores.telefono = true;
    if (!linea) nuevosErrores.linea = true;

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      alert("Por favor completá los campos obligatorios.");
      return;
    }

    setErrores({});
    const url = `https://wa.me/5491167411965?text=${generarMensaje()}`;
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Contacto | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered mb-6">Contacto Comercial</h1>
          <div className="columns is-centered">
            <div className="column is-8">
              <div className="field">
                <label className="label">Nombre completo *</label>
                <div className="control">
                  <input
                    className={`input ${errores.nombre ? 'is-danger' : ''}`}
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Empresa *</label>
                <div className="control">
                  <input
                    className={`input ${errores.empresa ? 'is-danger' : ''}`}
                    value={empresa}
                    onChange={e => setEmpresa(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Correo electrónico</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Teléfono de contacto *</label>
                <div className="control">
                  <input
                    className={`input ${errores.telefono ? 'is-danger' : ''}`}
                    type="tel"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Interés principal *</label>
                <div className="control">
                  <div className={`select is-fullwidth ${errores.linea ? 'is-danger' : ''}`}>
                    <select value={linea} onChange={e => setLinea(e.target.value)}>
                      <option value="">Seleccionar línea</option>
                      <option value="Línea Hotelera">Línea Hotelera</option>
                      <option value="Línea Hospitalaria">Línea Hospitalaria</option>
                      <option value="Ecommerce Minorista">Ecommerce Minorista</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Mensaje adicional</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    rows="4"
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value)}
                  />
                </div>
              </div>

              <div className="field is-grouped is-justify-content-center mt-5">
                <div className="control">
                  <button
                    id="btn-contacto-whatsapp"
                    onClick={enviarFormulario}
                    className="button is-success"
                  >
                    Enviar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
