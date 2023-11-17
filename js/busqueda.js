let contenedor = document.querySelector('#resultados');
let buscar = location.search;
let queryString = new URLSearchParams(buscar);
let pelicula0SerieBuscada = queryString.get('busqueda');
let apikey = 'bf0e25b4b648e8ee928c7dede4d12427';

fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${pelicula0SerieBuscada}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for(let i=0; i < data.results.length; i++){
            console.log(data);
            contenedor.innerHTML += `
            <a href="./detallepelicula.html?id=${data.results[i].id}">
                <article class="busque" id="ajs">
                    <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="${data.results[i].title}" class="img">
                    <p class="busque">
                        ${data.results[i].title ? data.results[i].title : data.results[i].name}<br>
                        Fecha de estreno: ${data.results[i].release_date ? data.results[i].release_date : data.results[i].first_air_date}<br>
                        Genero: ${data.results[i].genre_ids.length > 0 ? data.results[i].genre_ids[0] : 'N/A'}<br>
                        Rating: ${data.results[i].vote_average}<br>
                    </p>
                    </article>
                <article id="aajs">
                    
                </article>
            </a>`;
        }
    })
    .catch(function(error){
        console.log('Error');
    });

                            
            
            

    