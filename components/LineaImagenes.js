import Image from 'next/image';
import Link from 'next/link';

export default function LineaImagenes() {
  return (
    <section>
      <div className="wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
              <div className="block ApImage">
                <Link href="/linea-hotelera">
                  <Image src="/images/Linea-Hotelera.jpg" alt="Sábanas, Almohadas, Frazadas..." width={600} height={400} />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
              <div className="block ApImage">
                <Link href="/linea-hospitalaria">
                  <Image src="/images/Linea-Hospitalaria.jpg" alt="Camisolin, campos, ambos..." width={600} height={400} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
