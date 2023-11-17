let buscar = location.search;
let objBusqueda = new URLSearchParams(buscar);
let id = objBusqueda.get('id');

let detalles = document.querySelector('#detalleserie');
fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        detalles.innerHTML += `
            <article id="detallearticle">
                <img id="fotojs" src="https://image.tmdb.org/t/p/w500/${data.poster_path || ''}" />
                <h2>${data.name || ''}</h2>
                <h3> Sinopsis: ${data.overview || ''} </h3>
                <h3> Duracion: ${data.episode_run_time && data.episode_run_time.length > 0 ? data.episode_run_time[0] + ' mins' : 'N/A'} </h3>
                <h3> Fecha de estreno: ${data.first_air_date || ''} </h3>
                <h3> Genero: ${data.genres && data.genres.length > 0 ? data.genres[0].name : ''} </h3>
                <h3> Rating: ${data.vote_average || ''} </h3>
            </article>`;
    })
    .catch(function(error){
        console.log('Error! Intente mas tarde');
    });

let pelisreco = document.querySelector('#recoserie');

fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=bf0e25b4b648e8ee928c7dede4d12427')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < 18; i++) {
            pelisreco.innerHTML += `
            <a href="./detail-serie.html?id=${data.results[i].id}"></a>
            <article class="busque">
                <img class="busque" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path || ''}" />
                <h2>${data.results[i].name || ''}</h2>
            </article></a>`;
        }
    })
    .catch(function(error){
        console.log('error');
    });

