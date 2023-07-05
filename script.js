// function fetchAllMovies(){
//     fetch('http://localhost:3000/films')
//     .then(res => res.json())
//     .then(data =>{
//         fetchMovieTitles(data)
//     })
// }
// document.addEventListener(`DOMContentLoaded`,(event)=>{
//     fetchAllMovies()
// })
// function fetchFilms(movies){
//     let films =document.getElementById("film")

//     movies.forEach(movie =>{
// let filmDiv = document.createElement("div")
// filmDiv.classList = "name"
// filmDiv.innerText = movie.title
// films.appendChild(filmDiv)
//     });
// }



document.addEventListener("DOMContentLoaded",start)
function start(){
    fetchFilms();
}
fetch("http://localhost:3000/films")
    .then(response=>response.json())
    .then(data=>data.forEach(element =>{
        // rendering data to the dom 
        loadFilms(element)
    }))

 function loadFilms(filmsData){
    //render film names
    let myFilms= document.getElementById("filmNames");
    let filmsList=document.createElement("p");
  filmsList.innerText=filmsData.title;
  myFilms.appendChild(filmsList);
 }
 
 //add an event listener to give movie details when clicked

 filmsList.addEventListener("click",(event)=>{
    console.log("i was clicked")
    event.preventDefault();

    //getting id of film with its specific data
    fetch(`http://localhost:3000/films/${filmsData.id}`)
    .then(response=>response.json())
    .then(data=>renderFilmDetails(data))
    


 })