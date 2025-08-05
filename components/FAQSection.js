export default function FAQSection() {
  return (
    <section className="section pb-0">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 has-text-centered">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
        </div>
        <div className="columns is-multiline">
          {[
            {
              title: '¿Cómo comprar?',
              text: 'Envía tu pedido al correo con los productos deseados. Te enviaremos el presupuesto para confirmar tu compra.',
            },
            {
              title: '¿Qué productos ofrecemos?',
              text: 'Sábanas, toallas, acolchados, batas, cubre camas, almohadas, campos quirúrgicos, ambos, etc.',
            },
            {
              title: 'Medios de pago',
              text: 'Transferencia, depósito bancario, cheques preautorizados por nuestro sector de Créditos.',
            },
            {
              title: 'Envío del pedido',
              text: 'Vía expreso a convenir. Te enviamos el número de seguimiento y llega de 5 a 10 días hábiles.',
            },
          ].map((faq, i) => (
            <div key={i} className="column is-12-mobile is-6-tablet is-3-desktop is-flex is-flex-direction-column">
              <div className="card card-lg is-flex-grow-1">
                <div className="card-body">
                  <h3 className="card-title h5">{faq.title}</h3>
                  <p className="card-text content">{faq.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
