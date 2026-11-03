const botonMenu = document.getElementById("menuBtn");
const enlacesMenu = document.getElementById("menuLinks");

botonMenu.addEventListener("click", function() {
    enlacesMenu.classList.toggle("abierto");
});