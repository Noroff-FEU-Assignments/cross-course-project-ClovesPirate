import { simpleFetch } from "./utils/components.js";

const detailsContainer = document.querySelector(".top-section");
const suggestContainer = document.querySelector(".bottom-section");
const errorMain = document.querySelector("main");
const purchaseButton = document.querySelector(".purchase__button");

const searchArray =["earth", "journey", "alien", "fly", "sad", "death", "dragon", "cat", "storm", "family", "avenger, "];
const randomElement = [Math.floor(Math.random() * searchArray.length)];
const searchParams = searchArray[randomElement];

const options = { "headers": {
  'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
	"x-rapidapi-key": "9f4abe256cmshb615b7eda81776cp17607ajsn94b7372ba1af"
}};

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

const url = 'https://imdb-data-searching.p.rapidapi.com/om?i=' + id;
const suggestionURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=' + searchParams;


async function callDetails() {
  try {
  const movieDetails = await simpleFetch(url, options);
  const movieSuggestions = await simpleFetch(suggestionURL, options);
  console.log(movieSuggestions);

  purchaseButton.style.display = "flex";
  renderFilmDetails(movieDetails);
  renderSuggestions(movieSuggestions.Search, suggestContainer);
  }
  catch(error) {
    errorMain.innerHTML = displayError();
    console.log(error);
  }
};

callDetails();

function renderFilmDetails(movie) { 
  const title = document.querySelector("title");
  const nav = document.querySelector(".active-nav");
  const description = document.querySelector('meta[content]');
  detailsContainer.innerHTML = "";

  title.innerHTML = `Square Eyes | ${movie.Title}`;
  nav.innerHTML = `${movie.Title}`;
  description.innerHTML = `Square Eyes | ${movie.Title}`;


  // interacting with this from details.html  ---> data-modal-target="#purchase"
  detailsContainer.innerHTML = `<div class="details__wrapper top"> 
                                  <div class="details__card">
                                    <div class="details__image flex">
                                      <img src="${movie.Poster}" alt="${movie.Title}">
                                    </div>
                                    <div class="details__content">
                                      <h2>${movie.Title}</h2>
                                      <p class="top bold">${movie.Plot}</p>
                                      <div class="data">
                                        <p class="top">Actors: ${movie.Actors}</p>
                                        <span> Released: ${movie.Year}  Runtime: ${movie.Runtime} </span>
                                        <p> Director: <a href="creator_gregvernon.html">Greg Vernon</a>
                                      </div> 
                                    </div>
                                  </div>
                                </div>`
};

function renderSuggestions(arrey, container) {
  container.innerHTML = "";
  
    for(let i = 0; i < arrey.length; i++) {
  
      if (i === 6) {
        break;
      }
  
      container.innerHTML += `
                              <div class="card">
                                <a href="details.html?id=${arrey[i].imdbID}">
                                <div class="play__container">
                                  <div class="play__info">
                                    <img src="/images/square_eyes_play.png" alt="play-button">
                                  </div>
                                </div>
                                  <img src="${arrey[i].Poster}" alt="${arrey[i].Title}">
                                </a>
                              </div>`
    }
  };

  function displayError(message = "An error has occured. Please try again.") {
    return `<div class="error">${message}<button onClick="window.location.reload();">Reload</button></div>`;
  }