import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <br></br><br></br>
      <div className="container">
        <div className="columns is-multiline is-align-items-center border-bottom py-5">

          <div className="column is-4-desktop is-12-tablet">
            <ul className="list-inline footer-menu has-text-centered has-text-left-desktop">
              <li className="list-inline-item">
                <Link href="/">inicio</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/contacto">contacto</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#faq">preguntas frecuentes</Link>
              </li>
            </ul>
          </div>

          <div className="column is-4-desktop is-12-tablet has-text-centered">
            <Link href="/">
              <Image
                src="/images/Logo-web.png"
                alt="ed abastecimientos y servicios"
                width={300}
                height={90}
              />
            </Link>
          </div>

          <div className="column is-4-desktop is-12-tablet">
            <ul className="list-inline social-icons has-text-right-desktop has-text-centered">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/EDabastecimientos.info" target="_blank" rel="noreferrer">
                  <i className="ti-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/ed.abastecimientos/" target="_blank" rel="noreferrer">
                  <i className="ti-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/edays-argentina/?viewAsMember=true" target="_blank" rel="noreferrer">
                  <i className="ti-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 has-text-centered">
          <small className="text-light">
            Copyright © ED ABASTECIMIENTOS Y SERVICIOS SRL 
          </small>
        </div>
      </div>
    </footer>
  );
}
