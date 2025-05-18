import Link from 'next/link';

export default function ContactoLink() {
  return (
    <section className="section contacto-link bg-grey">
      <div className="container has-text-centered">
        <h3 className="mb-4 is-size-3 has-text-weight-medium">
          ¿Necesitás hacernos alguna pregunta?
        </h3>
        <Link href="/contacto" className="btn btn-primary is-medium">
          Ir a contacto
        </Link>
      </div>
    </section>
  );
}
