const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
    boton.addEventListener("click", function() {
        mensaje.textContent = "¡Gracias por visitar mi página web!";
    });
}