const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".tarjeta");

buscador.addEventListener("input", function() {
    const texto = buscador.value.toLowerCase();

    tarjetas.forEach(function(tarjeta) {
        const contenido = tarjeta.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});