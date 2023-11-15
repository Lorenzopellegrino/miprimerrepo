

let busquedaa = new URLSearchParams(location.search)
let peliserie = busquedaa.get("busqueda")
let resultados = document.querySelector(".resultados")
let contenido = ""

let formulario = document.querySelector("form")

formulario.addEventListener("submit", function(e){
    e.preventDefault()
    let value=input.value.length
    if(input.value == ""){
        alert("Este campo es obligatorio")
    }else if(input.value.length < 3){
        alert("Este campo tiene que tener al menos 3 caracteres")
    } else{
        fetch
    }
})

// let busquedaResultado = document.querySelector(".resultadobusqueda")
// busquedaResultado.innerHTML = `Resultados de busqueda de: "${query}"`


// let apiKey = "1173214cf5e2ac8f2c0ac1c242d0ec8a"

// fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}&query=${peliserie}`)
// .then(function(data){
//     for(i = 0; i < data.results.length; i++){
//         console.log(data)
//         resultadoBusqueda.innerHTML +=  `<a href="./resultadobusquda.html?i${data.results[i].id}"></a> <article> <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img"></img> </article>
        
//     }
//     })