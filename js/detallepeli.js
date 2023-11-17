let buscar = location.search;
let objBusqueda = new URLSearchParams(buscar);
let id = objBusqueda.get('id');

let detalles = document.querySelector('.resultPeli');
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        detalles.innerHTML += `
            <article id="detallearticle">
                <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${data.poster_path || ''}" />
                <h2>${data.title || ''}</h2>
                <h3> Sinopsis: ${data.overview || ''} </h3>
                <h3> Duracion: ${data.runtime || ''} </h3>
                <h3> Fecha de estreno: ${data.release_date || ''} </h3>
                <h3> Genero: ${data.genres && data.genres.length > 0 ? data.genres[0].name : ''} </h3>
                <h3> Rating: ${data.vote_average || ''} </h3>
            </article>`;
    })
    .catch(function(error){
        console.log('Error! Intente mas tarde');
    });

let pelisreco = document.querySelector('#recopelis');

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bf0e25b4b648e8ee928c7dede4d12427')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < 18; i++) {
            pelisreco.innerHTML += `
            <a href="./detail-pelis.html?id=${data.results[i].id}"></a>
            <article class="busque">
                <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path || ''}" />
                <h2>${data.results[i].title || ''}</h2>
            </article></a>`;
        }
    })
    .catch(function(error){
        console.log('error');
    });


