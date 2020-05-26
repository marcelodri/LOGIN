/*
1) Con datos correcto, arroja Modal de bienvenida
2) Spinner con duracion para simular el retrazo de la validacion de datos
3) Mensaje de error y reset de formulario  
4) boton de Visualizar contraseña oculta   

*/
// id
const iusuario = "holamundo";
const icontra = "123456";

// variables
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const check = document.getElementById('checkid');
const ubicacion =  document.getElementById("mensajes");
const formulario = document.getElementById("formulario");
const spinner = document.getElementById("cargador");

// eventListener
document.querySelector('#btn').addEventListener("click", enviarDatos)
document.querySelector('#checkid').addEventListener("click", myFunction)

// funciones
function myFunction() {
  var x = document.getElementById("contrasena");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function enviarDatos(e){
  const ingresou = document.querySelector('#usuario').value;
  const ingresoc = document.querySelector('#contrasena').value;
  e.preventDefault();
  spinner.style.display = "block"
  
    if (ingresou === iusuario && ingresoc === icontra) {
      setTimeout(() => {
        spinner.style.display = "none"
        $('#staticBackdrop').modal({
          keyboard: false
        })
      }, 2000);

    } else {
      setTimeout(() => {
        spinner.style.display = "none"
        ubicacion.style.display = 'block';
        const error = document.createElement("h5")
        const mensajeError = "Los datos ingresados son incorrectos, por favor intente nuevamente."
        error.innerText =  mensajeError;
        ubicacion.appendChild(error);
      setTimeout(() => {
          error.remove();
          formulario.reset();
          ubicacion.style.display = 'none';
        }, 3000);
      }, 2000);
    }
}












