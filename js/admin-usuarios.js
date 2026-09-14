const tablaUsuariosBody = document.getElementById('tabla-usuarios-body');

if (tablaUsuariosBody) {
  usuarios.forEach(function (usuario) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${usuario.run}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.apellidos}</td>
      <td>${usuario.correo}</td>
      <td>${usuario.tipo}</td>
    `;
    tablaUsuariosBody.appendChild(fila);
  });
}