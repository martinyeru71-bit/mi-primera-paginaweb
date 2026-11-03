const formulario = document.getElementById("formularioContacto");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    respuesta.textContent = "¡Gracias! Tu mensaje fue registrado.";

    formulario.reset();
});