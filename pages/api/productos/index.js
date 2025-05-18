import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'data', 'productos.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath);
    const productos = JSON.parse(data);
    return res.status(200).json(productos);
  }

  if (req.method === 'POST') {
    const data = fs.readFileSync(filePath);
    const productos = JSON.parse(data);
    const nuevoProducto = {
      id: req.body.id,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen,
      linea: req.body.linea,
      categoria: req.body.categoria,
      medidas: req.body.medidas || []
    };

    productos.push(nuevoProducto);
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
    return res.status(201).json({ mensaje: 'Producto creado', producto: nuevoProducto });
  }

  return res.status(405).json({ mensaje: 'Método no permitido' });
}
