document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".miVideo");

    // Función para reproducir el video cuando pasa el mouse sobre él
    function reproducirVideo() {
    this.play();
    }

    // Función para pausar el video cuando se retira el mouse del mismo
    function pausarVideo() {
    this.pause();
    }

    // Mostrar los videos al cargar el contenido
    videos.forEach(function(video) {
    video.style.display = "block";

      // Evento para reproducir el video al pasar el mouse sobre él
    video.addEventListener("mouseenter", reproducirVideo);

      // Evento para pausar el video al salir el mouse del mismo
    video.addEventListener("mouseleave", pausarVideo);
    });

const botonsubscribe = document.getElementById("subscribe");

function suscrito(){
    this.style.backgroundColor = "#444444";
    this.innerText = "Suscrito"
}

function suscrito2(){
    if(this.value == "Suscrito"){
        this.style.backgroundColor = "#6200EE";
        this.innerText = "Suscribete"
        this.value = "Suscribete"
    }else{
        this.style.backgroundColor = "#444444";
        this.innerText = "Suscrito"
        this.value = "Suscrito"
    }
}

botonsubscribe.addEventListener("click", suscrito2);

});
