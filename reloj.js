function actualizarFechaHora() {
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-PE");
    const hora = ahora.toLocaleTimeString("es-PE");

    document.getElementById("fechaHora").textContent =
        fecha + " - " + hora;
}

actualizarFechaHora();

setInterval(actualizarFechaHora, 1000);