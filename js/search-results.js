
let resultadoBusqueda = document.querySelector("#lupa")

let queryBusqueda = location.search
let queryString = new URLSearchParams(queryBusqueda)
let peliserie = queryString.get("busqueda")

let busquedaResultado = document.querySelector(".resultadobusqueda")
busquedaResultado.innerHTML = `Resultados de busqueda de: "${query}"`


let apiKey = "1173214cf5e2ac8f2c0ac1c242d0ec8a"

fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}&query=${peliserie}`)
.then(function(data){
    for(i = 0; i < data.results.length; i++){
        console.log(data)
        resultadoBusqueda.innerHTML +=  `<a href="./resultadobusquda.html?i${data.results[i].id}"></a> <article> <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img"></img> </article>
        
    }
    })