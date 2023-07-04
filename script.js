function fetchAllMovies(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}
document.addEventListener(`DOMContentLoaded`,(event)=>{
    fetchAllMovies()
})
function fetchFilms(films){
    let film=document.getElementById("film")
    film.forEach(film =>{

    });
}
