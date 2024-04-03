//cambio de sesion

var cam = document.getElementById("bot")
cam.addEventListener("click", function(){
cam.textContent = 'Cerrar Sesión'
})


// boton de megusta
var btnconteo = document.querySelectorAll(".conteo");

btnconteo.forEach(boton => {
    boton.addEventListener("click", function(){

        //funcion para alertas multiples
        var nombre = this.value;
    alert( nombre +" was loked");

        //Funcion para aumentar conteo
        var spanConteo = this.querySelectorAll("span")[0];
        var conteo = spanConteo.innerText;

        var nuevoConteo = parseInt(conteo) + 1;

        spanConteo.innerText = nuevoConteo;
    });
});

// borrar barrita

var bor = document.getElementById("but")

bor.addEventListener("click", function(){
bor.style.display= "none";
})