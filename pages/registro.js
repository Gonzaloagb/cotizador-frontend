import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Registro() {
  const [form, setForm] = useState({
    username: '',
    puesto: '',
    empresa: '',
    email: '',
    telefono: '',
    password: '',
    re_password: ''
  });

  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!form.username) nuevosErrores.username = true;
    if (!form.puesto) nuevosErrores.puesto = true;
    if (!form.empresa) nuevosErrores.empresa = true;
    if (!form.email) nuevosErrores.email = true;
    if (!form.telefono) nuevosErrores.telefono = true;
    if (!form.password) nuevosErrores.password = true;
    if (form.password !== form.re_password) nuevosErrores.re_password = true;
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresValidacion = validar();

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      setMensaje('Completá todos los campos obligatorios correctamente.');
      return;
    }

    setErrores({});
    setMensaje('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.username,
          puesto: form.puesto,
          empresa: form.empresa,
          telefono: form.telefono,
          email: form.email,
          password: form.password,
          password_confirmation: form.re_password
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje('✅ Registro exitoso. Redirigiendo al login...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } else {
        const error = data?.message || 'Error al registrar. Revisá los datos.';
        setMensaje(error);
      }
    } catch (error) {
      setMensaje('Error de conexión con el servidor.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Registro | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Registro de Empresa</h1>
          <div className="columns is-centered">
            <div className="column is-6">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Nombre completo *</label>
                  <div className="control">
                    <input
                      name="username"
                      className={`input ${errores.username ? 'is-danger' : ''}`}
                      value={form.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Puesto *</label>
                  <div className="control">
                    <input
                      name="puesto"
                      className={`input ${errores.puesto ? 'is-danger' : ''}`}
                      value={form.puesto}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Empresa *</label>
                  <div className="control">
                    <input
                      name="empresa"
                      className={`input ${errores.empresa ? 'is-danger' : ''}`}
                      value={form.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Correo electrónico *</label>
                  <div className="control">
                    <input
                      type="email"
                      name="email"
                      className={`input ${errores.email ? 'is-danger' : ''}`}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Teléfono *</label>
                  <div className="control">
                    <input
                      name="telefono"
                      className={`input ${errores.telefono ? 'is-danger' : ''}`}
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Contraseña *</label>
                  <div className="control">
                    <input
                      type="password"
                      name="password"
                      className={`input ${errores.password ? 'is-danger' : ''}`}
                      value={form.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Repetir contraseña *</label>
                  <div className="control">
                    <input
                      type="password"
                      name="re_password"
                      className={`input ${errores.re_password ? 'is-danger' : ''}`}
                      value={form.re_password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field mt-5">
                  <button className="button is-primary is-fullwidth" type="submit">
                    Registrarse
                  </button>
                </div>

                {mensaje && (
                  <p className="has-text-centered mt-3 has-text-danger">{mensaje}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
