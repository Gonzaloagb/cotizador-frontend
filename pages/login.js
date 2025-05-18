import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.username, // Laravel espera email, no username
          password: form.password,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        setError('Error inesperado. El backend no respondió con JSON.');
        return;
      }

      if (res.ok) {
        await login(data);
        window.location.href = '/';
      } else {
        setError(data?.message || 'Credenciales incorrectas.');
      }
    } catch (networkError) {
      setError('No se pudo conectar con el servidor.');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Iniciar Sesión | EDAYS</title>
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Iniciar Sesión</h1>
          <div className="columns is-centered">
            <div className="column is-5">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Correo electrónico</label>
                  <div className="control">
                    <input
                      name="username"
                      className="input"
                      type="email"
                      value={form.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Contraseña</label>
                  <div className="control has-icons-right">
                    <input
                      name="password"
                      className="input"
                      type={showPassword ? 'text' : 'password'}
                      value={form.password}
                      onChange={handleChange}
                    />
                    <span
                      className="icon is-small is-right"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: 'pointer', pointerEvents: 'all' }}
                    >
                      <i className={showPassword ? 'ti-eye-off' : 'ti-eye'}></i>
                    </span>
                  </div>
                </div>

                <div className="field mt-4">
                  <button type="submit" className="button is-primary is-fullwidth">
                    Iniciar sesión
                  </button>
                </div>

                <div className="field mt-2">
                  <Link href="/registro">
                    <span className="button is-light is-fullwidth">
                      ¿No tenés cuenta? Registrate
                    </span>
                  </Link>
                </div>

                {error && (
                  <p className="has-text-danger has-text-centered mt-3">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
