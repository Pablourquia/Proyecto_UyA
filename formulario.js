const botonEnviar = document.getElementById('boton-enviar');
const mensaje = document.getElementById('mensaje');
const status = document.getElementById('status');

botonEnviar.addEventListener('click', function(event) {
  // Detener el comportamiento predeterminado del botón
  event.preventDefault();

  // Obtener el valor del campo de correo electrónico
  const email = document.getElementById('exampleFormControlInput1').value;

  // Expresión regular para validar el correo electrónico
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Validar si el correo electrónico ingresado es válido
  if (!regex.test(email)) {
    mensaje.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
    mensaje.style.color = 'red';
    return;
  }

  // Obtener los valores de los campos de selección
  const respuesta1 = document.getElementById('respuesta1').value;
  const respuesta2 = document.getElementById('respuesta2').value;
  const respuesta3 = document.getElementById('respuesta3').value;

  // Verificar si cada campo de selección tiene un valor seleccionado
  if (respuesta1 === "" || respuesta2 === "" || respuesta3 === "") {
    mensaje.innerHTML = 'Por favor, seleccione una opción para cada pregunta.';
    mensaje.style.color = 'red';
    return;
  }

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
  mensaje.innerHTML = 'Formulario enviado, ¡Gracias por completar el formulario!';
  mensaje.style.color = 'green';
  
  // Limpiar los campos del formulario
  const campo1 = document.getElementById('exampleFormControlInput1');
  const campo2 = document.getElementById('respuesta1');
  const campo3 = document.getElementById('respuesta2');
  const campo4 = document.getElementById('respuesta3');
  campo1.value = "";
  campo2.value = "";
  campo3.value = "";
  campo4.value = "";
});


 


