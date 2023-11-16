fetch("https://api.themoviedb.org/3/movie/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let results = data.results
        let peliculas = document.querySelector("#pelicula-2023")

        for (let i = 0; i < 7; i++){
            peliculas.innerHTML += `
                <a href="./detallepelicula.html?id=${results[i].id}">
                    <article>
                        <img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" alt="pelis"></img>
                    </article>
                    <h5 class="tituPelis">${results[i].title}</h5>
                    <p class="fecha-estreno">${results[i].release_date}</p>
                </a>`;
        }
    })
    .catch(function(error){
        console.log(error);
    });

fetch("https://api.themoviedb.org/3/tv/popular?api_key=bf0e25b4b648e8ee928c7dede4d12427")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let results = data.results
        let series = document.querySelector("#series")

        for (let i = 0; i < 7; i++){
            series.innerHTML += `
                <a href="./detalleserie.html?id=${results[i].id}">
                    <article>
                        <img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" alt="series"></img>
                    </article>
                    <h5 class="tituSeries">${results[i].name}</h5>
                    <p class="fecha-estreno">${results[i].first_air_date}</p>
                </a>`;
        }
    })
    .catch(function(error){
        console.log(error);
    });

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=bf0e25b4b648e8ee928c7dede4d12427")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let results = data.results
        let populares = document.querySelector("#populares")

        for (let i = 0; i < 7; i++){
            populares.innerHTML += `
                <a href="./detallepelicula.html?id=${results[i].id}">
                    <article>
                        <img src="https://image.tmdb.org/t/p/w500/${results[i].poster_path}" alt="peliculas"></img>
                    </article>
                    <h5 class="tituPelis">${results[i].title}</h5>
                    <p class="fecha-estreno">${results[i].release_date}</p>
                </a>`;
        }
    })
    .catch(function(error){
        console.log(error);
    });








