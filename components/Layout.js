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


      <div className="topbar">
        <div className="container topbar__container">
          <div className="topbar__left">
            <a className="topbar__item" href="tel:+5491167411965">
              <svg className="topbar__icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1z" />
              </svg>
              +54 9 11 6741 1965
            </a>

            <a className="topbar__item" href="mailto:ventas@edabastecimientosyservicios.com.ar">
              <svg className="topbar__icon" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              ventas@edabastecimientosyservicios.com.ar
            </a>
          </div>

        </div>
      </div>

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

            </div>
          </div>
        </div>
      </nav>

      <a
        href={`https://wa.me/5491122625882?text=Hola%20quiero%20hacer%20una%20consulta`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="Chatear por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
          <path d="M16 .3C7.2.3.1 7.4.1 16.1c0 2.8.7 5.5 2.1 7.9L.1 31.7l8-2.1c2.3 1.3 5 2 7.8 2 8.8 0 15.9-7.1 15.9-15.8S24.8.3 16 .3zm0 29c-2.6 0-5.1-.7-7.3-2.1l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2.1-2-4.6-2-7.1 0-7.4 6-13.4 13.5-13.4 3.6 0 7 1.4 9.5 3.9 2.5 2.5 4 5.9 4 9.5 0 7.4-6 13.4-13.4 13.4zm7.4-9.9c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.8.2s-.9 1.2-1.1 1.4c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.1-.8.1-.1.4-.4.5-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.3 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"/>
        </svg>
      </a>



      <main>{children}</main>
    </>
  );
}
