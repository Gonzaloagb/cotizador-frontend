export default function FAQSection() {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 has-text-centered">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
        </div>
        <div className="columns masonry-wrapper">
          <div className="column is-6-desktop">
            <div className="card card-lg">
              <div className="card-body">
                <h3 className="card-title h5">¿Cómo comprar?</h3>
                <p className="card-text content">Envía tu pedido al correo con los productos deseados. Te enviaremos el presupuesto para confirmar tu compra.</p>
              </div>
            </div>
          </div>
          <div className="column is-6-desktop">
            <div className="card card-lg">
              <div className="card-body">
                <h3 className="card-title h5">¿Qué productos ofrecemos?</h3>
                <p className="card-text content">Sábanas, toallas, acolchados, batas, cubre camas, almohadas, campos quirúrgicos, ambos, etc.</p>
              </div>
            </div>
          </div>
          <div className="column is-6-desktop">
            <div className="card card-lg">
              <div className="card-body">
                <h3 className="card-title h5">Medios de pago</h3>
                <p className="card-text content">Transferencia, depósito bancario, cheques preautorizados por nuestro sector de Créditos.</p>
              </div>
            </div>
          </div>
          <div className="column is-6-desktop">
            <div className="card card-lg">
              <div className="card-body">
                <h3 className="card-title h5">Envío del pedido</h3>
                <p className="card-text content">Vía expreso a convenir. Te enviamos el número de seguimiento y llega de 5 a 10 días hábiles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
