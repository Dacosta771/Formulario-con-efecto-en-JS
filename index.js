// Variable que contiene los elementos <input> para ingresar texto
var input = document.getElementsByClassName('texto');

function mi_funcion() {   // Función desencadenada por el evento
    if(this.value.length >= 1) {
        // Agrega la clase "texto_fijo" definida en "index.css"
        this.nextElementSibling.classList.add('texto_fijo');
    } else {
        // Remueve la clase "texto_fijo" definida en "index.css"
        this.nextElementSibling.classList.remove('texto_fijo');
    }
}

// Agregar en "Event Listener" a todos los <input>
for(var i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', mi_funcion)
}
