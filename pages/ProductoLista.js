import useProductos from '../hooks/useProductos';
import { useCotizacion } from '../context/CotizacionContext';

export default function ProductoLista() {
  const { productos, loading } = useProductos();
  const { agregarProducto } = useCotizacion();

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="columns is-multiline">
      {productos.map((prod) => (
        <div key={prod.id} className="column is-one-quarter box">
          <h3 className="title is-6">{prod.nombre}</h3>
          <p>{prod.descripcion}</p>
          <button
            className="button is-primary mt-2"
            onClick={() =>
              agregarProducto({
                id: prod.id,
                nombre: prod.nombre,
                cantidad: 1
              })
            }
          >
            Agregar a cotización
          </button>
        </div>
      ))}
    </div>
  );
}
