// ---------- Funciones reutilizables para mostrar/ocultar errores ----------
function mostrarError(idCampo, mensaje) {
  const span = document.getElementById('error-' + idCampo);
  span.textContent = mensaje;
  span.style.display = 'block';
}

function ocultarError(idCampo) {
  const span = document.getElementById('error-' + idCampo);
  span.textContent = '';
  span.style.display = 'none';
}

// ---------- Validación: Login ----------
const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let esValido = true;

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if (correo === '') {
      mostrarError('correo', 'El correo es requerido.');
      esValido = false;
    } else {
      ocultarError('correo');
    }

    if (contrasena.length < 4 || contrasena.length > 10) {
      mostrarError('contrasena', 'La contraseña debe tener entre 4 y 10 caracteres.');
      esValido = false;
    } else {
      ocultarError('contrasena');
    }

    if (esValido) {
      alert('Inicio de sesión válido (simulado, aún sin backend).');
    }
  });
}

// ---------- Validación: Registro ----------
const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
  formRegistro.addEventListener('submit', function (evento) {
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
      alert('Registro válido (simulado, aún sin backend).');
    }
  });
}

// ---------- Validación: Contacto ----------
const formContacto = document.getElementById('form-contacto');
if (formContacto) {
  formContacto.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let esValido = true;

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const comentario = document.getElementById('comentario').value;

    if (nombre === '' || nombre.length > 100) {
      mostrarError('nombre', 'Nombre requerido, máximo 100 caracteres.');
      esValido = false;
    } else {
      ocultarError('nombre');
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

    if (comentario === '' || comentario.length > 500) {
      mostrarError('comentario', 'Comentario requerido, máximo 500 caracteres.');
      esValido = false;
    } else {
      ocultarError('comentario');
    }

    if (esValido) {
      alert('Mensaje enviado (simulado, aún sin backend).');
    }
  });
}