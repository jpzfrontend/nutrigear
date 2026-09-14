const formProducto = document.getElementById('form-producto');

if (formProducto) {
  formProducto.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let esValido = true;

    const codigo = document.getElementById('codigo').value;
    const nombreProd = document.getElementById('nombreProd').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;

    if (codigo.length < 3) {
      mostrarError('codigo', 'El código debe tener al menos 3 caracteres.');
      esValido = false;
    } else {
      ocultarError('codigo');
    }

    if (nombreProd === '' || nombreProd.length > 100) {
      mostrarError('nombreProd', 'Nombre requerido, máximo 100 caracteres.');
      esValido = false;
    } else {
      ocultarError('nombreProd');
    }

    if (precio === '' || Number(precio) < 0) {
      mostrarError('precio', 'El precio no puede ser negativo.');
      esValido = false;
    } else {
      ocultarError('precio');
    }

    if (stock === '' || Number(stock) < 0 || !Number.isInteger(Number(stock))) {
      mostrarError('stock', 'El stock debe ser un número entero igual o mayor a 0.');
      esValido = false;
    } else {
      ocultarError('stock');
    }

    if (esValido) {
      alert('Producto guardado (simulado, aún sin backend).');
      formProducto.reset();
    }
  });
}