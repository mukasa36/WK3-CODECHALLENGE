document.addEventListener("DOMContentLoaded", start);
function start() {
// fetchFilms();
}
fetch("http://localhost:3000/films")
.then((response) => response.json())
.then((data) =>
data.forEach((element) => {
// rendering data to the dom
loadFilms(element);
})
);

function loadFilms(filmsData) {
//render film names
let myFilms = document.getElementById("filmNames");
let filmsList = document.createElement("p");
filmsList.innerText = filmsData.title;
myFilms.appendChild(filmsList);

//add an event listener to give movie details when clicked

filmsList.addEventListener("click", (event) => {
console.log("i was clicked");
event.preventDefault();

//getting id of film with its specific data
fetch(`http://localhost:3000/films/${filmsData.id}`)
.then((response) => response.json())
.then((data) => renderFilmDetails(data));
});
}

function renderFilmDetails(details){
let moviesDetailes=document.getElementById("displayData")

let html =`
 

<h1>${details.title}</h1>
<p>runtime ${details.runtime}</p>
<p> Description ${details.description }</p>
<p> showtime ${details.showtime}</p>
<p> the capacity ${details.capacity}</p>
<p> tickets sold ${details.tickets_sold}</p>
<img src=${details.poster} alt="">`

moviesDetailes.innerHTML=html;

}