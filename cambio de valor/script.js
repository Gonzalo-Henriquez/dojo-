document.getElementById("comidaSelect").addEventListener("change", function() {
    setTimeout(elegirComida(this.value), 2000);
});

function elegirComida(comida) {
    alert("Tu comida esta lista");


}



console.log("Inicio");
setTimeout(mensaje, 3000);
console.log("¡Final!");