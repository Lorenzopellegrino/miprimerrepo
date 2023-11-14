let peliculas = document.querySelector(".peliculasp")

fetch("https://api.themoviedb.org/3/movie/76341?api_key=514fe6f92e87e8b96d2b08b7f2b1a078")
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        let info = data.results
        console.log(info)

        let contenedorPeli = document.querySelector(".peliculasp")
    
        for (let i = 0; i < 5; i++){
            contenedorPeli.innerHTML += 
            <a href="./detallepelicula.html?id=${data.results[i].id}">
                <article>
                <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="pelis"></img>
                </article>
                <h5 class="tituPelis">${info[i].title}</h5>
			    <p class="fecha-estreno">${info[i].release_date}</p>
            </a>
        }

    .catch (function(error){
        console.log(error)
    })
})

fetch("https://api.themoviedb.org/3/tv/popular/76341?api_key=514fe6f92e87e8b96d2b08b7f2b1a078")
    .then(function(response){
        return responde.json()
    })
    .then(function(data){
        let info = data.results
        console.log(info)

        let contenedorSerie = document.querySelector(".")

        for(let i = 0; i < info.length; i++) {
            contenedorSerie.innerHTML += 
        }
    })