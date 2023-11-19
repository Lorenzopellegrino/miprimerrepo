let generospeli = document.querySelector('#tipogeneropeli');

fetch('https://api.themoviedb.org/3/discover/movie?api_key=514fe6f92e87e8b96d2b08b7f2b1a078')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if (data.results && data.results.length > 0) {
            detalleGenero = "";

            data.results.forEach(movie => {
                detalleGenero += `<article id="recopelis">
                <div class="tipogeneropeli">
                <a id="fotojs" href="./detallepelicula.html?resultadosbusqueda${movie.title}">
                    <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="pelis">  </img>
                </a>
                <h4 class="tituPelis"> ${movie.title} </h4>
                <p> ${movie.release_date} </p>
                </div>
                </article>`;
            }); 
            generospeli.innerHTML = detalleGenero;
        } else {
            console.log("No se encontraron resultados de peliculas")
        }
    })
    .catch(error => console.log("Error en la solicitud de peliculas", error));
    

let generosserie = document.querySelector('#tipogeneroserie');

fetch('https://api.themoviedb.org/3/discover/tv?api_key=514fe6f92e87e8b96d2b08b7f2b1a078')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if (data.results && data.results.length > 0) {
            detalleGenero = "";

            data.results.forEach(tv => {
                detalleGenero += `<article id="recoserie">
                <div class="tipogeneroserie">
                <a id="fotojs" href="./detalleserie.html?resultadosbusqueda${tv.title}">
                    <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${tv.poster_path}" alt="pelis">  </img>
                </a>
                <h4 class="tituSeries"> ${tv.title} </h4>
                <p> ${tv.release_date} </p>
                </div>
                </article>`;
            }); 
            generosserie.innerHTML = detalleGenero;
        } else {
            console.log("No se encontraron resultados de peliculas")
        }
    })
    .catch(error => console.log("Error en la solicitud de peliculas", error));