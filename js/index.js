
let peliculas = document.querySelector(".PELICULAS")

fetch("https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=bf0e25b4b648e8ee928c7dede4d12427")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < 5; i++) {
            console.log(data);
            peliculas.innerHTML += `
            <a href="./detallepelicula.html?id=${data.results[i].id}"><article>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
                <h2>${data.results[i].title}</h2>
            </article></a>`;
        }
    })
    .catch(function(error) {
        console.log('Error!!');
    });

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