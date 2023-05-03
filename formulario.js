const botonEnviar = document.getElementById('boton-enviar');

botonEnviar.addEventListener('click', function(event) {
  // Detener el comportamiento predeterminado del botón
  event.preventDefault();

  // Obtener los valores de los campos de entrada y selección
  const email = document.getElementById('exampleFormControlInput1').value;
  const respuesta1 = document.getElementById('respuesta1').value;
  const respuesta2 = document.getElementById('respuesta2').value;
  const respuesta3 = document.getElementById('respuesta3').value;

  // Crear un objeto JSON con los valores
  const data = {
    email: email,
    respuesta1: respuesta1,
    respuesta2: respuesta2,
    respuesta3: respuesta3
  };

  // Convertir el objeto JSON a una cadena JSON
  const jsonData = JSON.stringify(data);

  // Guardar la cadena JSON en el almacenamiento local del navegador
  localStorage.setItem('form-data', jsonData);

  // Mostrar un mensaje de éxito
  alert('Los datos del formulario se han guardado correctamente.');
});

