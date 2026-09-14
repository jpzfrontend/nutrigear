function obtenerCarrito() {
  const datos = localStorage.getItem('carritoNutriGear');
  return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem('carritoNutriGear', JSON.stringify(carrito));
}

function agregarAlCarrito(codigo) {
  const carrito = obtenerCarrito();
  const itemExistente = carrito.find(function (item) { return item.codigo === codigo; });

  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    carrito.push({ codigo: codigo, cantidad: 1 });
  }

  guardarCarrito(carrito);
}

function mostrarCarrito() {
  const contenedor = document.getElementById('carrito-contenido');
  if (!contenedor) return;

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
    return;
  }

  let total = 0;
  let html = '';

  carrito.forEach(function (item) {
    const producto = productos.find(function (p) { return p.codigo === item.codigo; });
    if (!producto) return;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;

    html += `
      <div class="item-carrito">
        <p>${producto.nombre} x ${item.cantidad} - $${subtotal.toLocaleString('es-CL')}</p>
        <button data-codigo="${producto.codigo}" class="quitar">Quitar</button>
      </div>
    `;
  });

  html += `<p class="total">Total: $${total.toLocaleString('es-CL')}</p>`;
  contenedor.innerHTML = html;

  contenedor.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('quitar')) {
      const codigo = evento.target.getAttribute('data-codigo');
      let carritoActual = obtenerCarrito();
      carritoActual = carritoActual.filter(function (item) { return item.codigo !== codigo; });
      guardarCarrito(carritoActual);
      mostrarCarrito();
    }
  });
}

mostrarCarrito();