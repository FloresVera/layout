arrastrarElemento(document.getElementById('componente1'));
arrastrarElemento(document.getElementById('componente2'));
arrastrarElemento(document.getElementById('componente3'));
arrastrarElemento(document.getElementById('componente4'));
arrastrarElemento(document.getElementById('componente5'));
arrastrarElemento(document.getElementById('componente6'));
arrastrarElemento(document.getElementById('componente7'));
arrastrarElemento(document.getElementById('componente8'));
arrastrarElemento(document.getElementById('componente9'));
arrastrarElemento(document.getElementById('componente10'));
arrastrarElemento(document.getElementById('componente11'));
arrastrarElemento(document.getElementById('componente12'));
arrastrarElemento(document.getElementById('componente13'));
arrastrarElemento(document.getElementById('componente14'));
arrastrarElemento(document.getElementById('componente15'));
arrastrarElemento(document.getElementById('componente16'));
arrastrarElemento(document.getElementById('producto1'));
arrastrarElemento(document.getElementById('producto2'));
arrastrarElemento(document.getElementById('producto3'));
arrastrarElemento(document.getElementById('producto4'));

var a = 4
document.getElementById('producto1').addEventListener("dblclick", function () {
    document.getElementById('producto1').style.zIndex = a.toString()
    a = a + 1
})
document.getElementById('producto2').addEventListener("dblclick", function () {
    document.getElementById('producto2').style.zIndex = a.toString()
    a = a + 1
})
document.getElementById('producto3').addEventListener("dblclick", function () {
    document.getElementById('producto3').style.zIndex = a.toString()
    a = a + 1
})
document.getElementById('producto4').addEventListener("dblclick", function () {
    document.getElementById('producto4').style.zIndex = a.toString()
    a = a + 1
})

function arrastrarElemento(element) {
    //establecer 4 posiciones para posicionar en la pantalla
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onpointerdown = arrastrarPuntero;
    function arrastrarPuntero(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = iniciarArrastreElemento;
        document.onpointerup = pararArrastreElemento;
    }
    function iniciarArrastreElemento(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        element.style.top = element.offsetTop - pos2 + 'px';
        element.style.left = element.offsetLeft - pos1 + 'px';
    }
    function pararArrastreElemento() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
