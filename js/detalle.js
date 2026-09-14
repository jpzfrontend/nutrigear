const parametros = new URLSearchParams(window.location.search);
const codigoSeleccionado = parametros.get('codigo');
const producto = productos.find(function (p) { return p.codigo === codigoSeleccionado; });

const contenedorDetalle = document.getElementById('detalle-producto');

if (contenedorDetalle && producto) {
  contenedorDetalle.innerHTML = `
    <h1>${producto.nombre}</h1>
    <p>${producto.descripcion}</p>
    <p>Precio: $${producto.precio.toLocaleString('es-CL')}</p>
    <button id="boton-agregar">Añadir al carrito</button>
  `;

  document.getElementById('boton-agregar').addEventListener('click', function () {
    agregarAlCarrito(producto.codigo);
    alert('Producto añadido al carrito.');
  });
}