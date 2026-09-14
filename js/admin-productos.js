const tablaBody = document.getElementById('tabla-productos-body');

if (tablaBody) {
  productos.forEach(function (producto) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${producto.codigo}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>$${producto.precio.toLocaleString('es-CL')}</td>
    `;
    tablaBody.appendChild(fila);
  });
}