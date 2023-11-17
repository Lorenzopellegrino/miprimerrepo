let generospeli = document.querySelector('#lista-generos-peliculas');

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let infogeneros = data.genres;
        for (let i = 0; i < infogeneros.length; i++){
            generospeli.innerHTML +=`
            <a class="botona" href="./generos.html?id=${infogeneros[i].id}"><article>
                <h2>${infogeneros[i].name}</h2>
            </article></a>`
        }        
    })
    .catch(function(error){
        console.log('Error! Intente mas tarde');
    });

let generosseries = document.querySelector('#lista-generos-series');

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let infogeneros = data.genres;
        for (let i = 0; i < infogeneros.length; i++){
            generosseries.innerHTML +=`
            <a class="botona" href="./generos.html?id=${infogeneros[i].id}"><article>
                <h2>${infogeneros[i].name}</h2>
            </article></a>`
        }        
    })
    .catch(function(error){
        console.log('Error! Intente mas tarde');
    })
