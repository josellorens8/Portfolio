window.addEventListener("scroll", function(){
    let animacionImagen = document.getElementById("imagenSm")
    let animacionTexto = this.document.getElementById("textoSM")
    let posicionImagen = animacionImagen.getBoundingClientRect().top;
    console.log(posicionImagen);
    let tamañoDePantalla = window.innerHeight;

    if (posicionImagen < tamañoDePantalla) {
        animacionImagen.style.animation = "mover 1s ease-out"
        animacionTexto.style.animation = "mover 1s ease-in-out"
    }
})