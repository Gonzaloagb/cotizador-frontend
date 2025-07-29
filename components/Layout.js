import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { usuario, logout } = useAuth();

  return (
    <>
      <Head>
        <title>EDAYS | Blanquería Mayorista</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="navbar is-sticky-top navigation" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/" className="navbar-item">
              <img src="/images/Logo-web.png" alt="EDAYS" width="195" />
            </Link>

            <a
              role="button"
              className={`navbar-burger burger ${isOpen ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`} id="navbar-links">
            <div className="navbar-end">
              <Link href="/linea-hotelera" className="navbar-item">Línea Hotelera</Link>
              <Link href="/linea-hospitalaria" className="navbar-item">Línea Hospitalaria</Link>
              <Link href="/contacto" className="navbar-item">Contacto</Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" onClick={() => setDropdownOpen(!dropdownOpen)} style={{ cursor: 'pointer' }}>
                  <i className="ti-user" style={{ fontSize: '18px' }}></i>
                </a>

                <div className={`navbar-dropdown is-right ${dropdownOpen ? 'is-active' : ''}`}>
                  {usuario ? (
                    <>
                      <span className="navbar-item">Hola, {usuario.username}</span>
                      <Link href="/mis-cotizaciones" className="navbar-item">Mis Cotizaciones</Link>
                      <a className="navbar-item" onClick={logout} style={{ cursor: 'pointer' }}>Cerrar sesión</a>
                    </>
                  ) : (
                    <>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
