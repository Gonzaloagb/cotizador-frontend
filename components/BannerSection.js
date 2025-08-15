import Link from "next/link";

export default function BannerSection() {
  // Cambiá estas rutas por tus imágenes en /public/images
  const products = [
    {
      img: "/images/juegodesabanas.png",
      title: "Sábanas hoteleras",
      text: "Percal, 200 hilos.",
      href: "https://www.edabastecimientosyservicios.com.ar/producto/42",
    },
    {
      img: "/images/ambo_A.png",
      title: "Ambos unisex",
      text: "Arciel o acrocel. Del XXS al 7XL.",
      href: "https://www.edabastecimientosyservicios.com.ar/producto/63",
    },
    {
      img: "/images/juegodetoalla.png",
      title: "Juego de toalla y toallón",
      text: "Composición: 100% algodón",
      href: "https://www.edabastecimientosyservicios.com.ar/producto/74",
    },
  ];

  return (
    <section className="heroSimple">
      <div className="container heroSimple__grid">
        {/* Texto */}
        <div className="heroSimple__content">
          <p className="heroSimple__kicker">Proveedores textiles</p>

          <h1 className="heroSimple__title">
            La calidad que necesitás <span>para tu establecimiento</span>
          </h1>

          <p className="heroSimple__subtitle">
            Línea hotelera y sanatorial. Entregas a todo el país, asesoría personalizada
            y precios mayoristas.
          </p>


        </div>

        {/* Foto promo */}
        <div className="heroSimple__media">
          <img
            src="/images/promocolchon.png" 
            alt="Blanquería calidad hotelera"
            loading="eager"
          />
        </div><br/>
      </div>

      {/* Tira de 3 productos */}
      <div className="container heroSimple__strip">
        {products.map((p) => (
          <Link href={p.href} className="stripItem" key={p.title}>
            <div className="stripItem__imgWrap">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <h3 className="stripItem__title">{p.title}</h3>
            <p className="stripItem__text">{p.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
