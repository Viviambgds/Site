function mostrarPopup(titulo, texto) {
    document.getElementById("popup-title").textContent = titulo;
    document.getElementById("popup-text").textContent = texto;
    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}
