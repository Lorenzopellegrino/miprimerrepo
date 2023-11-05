let formulario = document.querySelector('form');
let campoBusqueda = document.getElementById('.resultPeli');
let resultadoBusqueda = document.getElementById('resultadoBusqueda');

let resultBusqueda = document.querySelector(".resultPeli").innerHTML = `Resultados de búsqueda para: "${textoBuscado}".`
formulario.addEventListener('submit', function (event) {
event.preventDefault(); 


let textoBuscado = campoBusqueda.value;


resultadoBusqueda.textContent = `Resultados de búsqueda para: "${textoBuscado}".`;

});