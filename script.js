//Crear una lista para obtener todos los elementos de tipo img de la página
var imagenes = document.getElementsByTagName("img");
//Iniciar for para recorrer cada imagen
for (var i = 0; i < imagenes.length; i++) {
    // Guardar la imagen en una constante
    const imagen = imagenes[i];

    imagen.onmousedown = function (event) {
        // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
        imagen.style.position = 'absolute';
        imagen.style.zIndex = 10;
        imagen.style.borderRadius = '50%'
        imagen.style.boxShadow = '0px 0px 15px 15px #e2ebf0'

        // quitar cualquier padre actual y moverlo directamente a body
        // para posicionarlo relativo al body
        document.body.append(imagen);

        // centrar la imagen en las coordenadas (pageX, pageY)
        function moveAt(pageX, pageY) {
            imagen.style.left = pageX - imagen.offsetWidth / 2 + 'px';
            imagen.style.top = pageY - imagen.offsetHeight / 2 + 'px';
        }

        // mover nuestra imagen posicionada absolutamente bajo el puntero
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // (2) mover la imagen con mousemove
        document.addEventListener('mousemove', onMouseMove);

        // (3) soltar la imagen, quitar cualquier manejador de eventos innecesario
        imagen.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            imagen.onmouseup = null;
            imagen.style.borderRadius = '0%'
            imagen.style.boxShadow = 'none'
        };

        imagen.ondragstart = function () {
            return false;
        };

    };
}