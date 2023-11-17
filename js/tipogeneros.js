let tipogenerospeli = document.querySelector('.tipogeneropeli');

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bf0e25b4b648e8ee928c7dede4d12427`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let infogeneros = data.genres;
        for (let i = 0; i < infogeneros.length; i++){
            generospeli.innerHTML +=`
            <a class="botona" href="./tipogeneros.html?id=${infogeneros[i].id}"><article>
                <h2>${infogeneros[i].name}</h2>
            </article></a>`
        }        
    })
    .catch(function(error){
        console.log('Error! Intente mas tarde');
    });
