function mostrarPopup(titulo, texto) {
    document.getElementById("titulo-popup").textContent = titulo;
    document.getElementById("texto-popup").textContent = texto;
    document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}
