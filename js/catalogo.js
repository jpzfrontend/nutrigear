const contenedorProductos = document.getElementById('lista-productos');

if (contenedorProductos) {
  productos.forEach(function (producto) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'producto';
    tarjeta.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio.toLocaleString('es-CL')}</p>
      <a href="producto-detalle.html?codigo=${producto.codigo}">Ver detalle</a>
      <button data-codigo="${producto.codigo}">Añadir al carrito</button>
    `;
    contenedorProductos.appendChild(tarjeta);
  });

  contenedorProductos.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'BUTTON') {
      const codigo = evento.target.getAttribute('data-codigo');
      agregarAlCarrito(codigo);
      alert('Producto añadido al carrito.');
    }
  });
}