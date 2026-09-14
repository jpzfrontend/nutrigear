const formUsuario = document.getElementById('form-usuario');

if (formUsuario) {
  formUsuario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let esValido = true;

    const run = document.getElementById('run').value;
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;

    const patronRun = /^[0-9]{6,8}[0-9kK]$/;
    if (!patronRun.test(run)) {
      mostrarError('run', 'RUN inválido. Sin puntos ni guión, ej: 19011022K.');
      esValido = false;
    } else {
      ocultarError('run');
    }

    if (nombre === '' || nombre.length > 50) {
      mostrarError('nombre', 'Nombre requerido, máximo 50 caracteres.');
      esValido = false;
    } else {
      ocultarError('nombre');
    }

    if (apellidos === '' || apellidos.length > 100) {
      mostrarError('apellidos', 'Apellidos requeridos, máximo 100 caracteres.');
      esValido = false;
    } else {
      ocultarError('apellidos');
    }

    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const dominioValido = dominiosPermitidos.some(function (dominio) {
      return correo.endsWith(dominio);
    });
    if (correo === '' || correo.length > 100 || !dominioValido) {
      mostrarError('correo', 'Correo requerido (@duoc.cl, @profesor.duoc.cl o @gmail.com).');
      esValido = false;
    } else {
      ocultarError('correo');
    }

    if (direccion === '' || direccion.length > 300) {
      mostrarError('direccion', 'Dirección requerida, máximo 300 caracteres.');
      esValido = false;
    } else {
      ocultarError('direccion');
    }

    if (esValido) {
      alert('Usuario guardado (simulado, aún sin backend).');
      formUsuario.reset();
    }
  });
}