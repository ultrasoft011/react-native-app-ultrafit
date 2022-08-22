function closureMostrarNombre() {
  var nombre = "Felipe";
  function mostrarNombre() {
    console.log(nombre);
  }
  mostrarNombre();
}
nombre = "Carlos"
closureMostrarNombre();

function saludar(saludo, callback) {
    var miNombre = "Felipe " + saludo;
    callback(miNombre)
} 

function logNombre(cita) {
    console.log(cita);
    
}

saludar("Bienvenido", logNombre);