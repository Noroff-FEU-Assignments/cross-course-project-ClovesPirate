const detailsContainer = document.querySelector(".top-section");
const suggestContainer = document.querySelector(".bottom-section");

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

async function simpleFetch(url, headers) {
  const response = await fetch(url, headers);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
}


async function callDetails() {
  try {
  const movieDetails = await simpleFetch(url, options);
  const movieSuggestions = await simpleFetch(suggestionURL, options);
  console.log(movieSuggestions);


  createHtml(movieDetails);
  forLoop(movieSuggestions.Search, suggestContainer);
  }
  catch(error) {
    console.log(error);
  }
};

callDetails();

function createHtml(movie) { // HTML to be created upon execution of fetchPokemon()
  const title = document.querySelector("title");
  const nav = document.querySelector(".active-nav");
  detailsContainer.innerHTML = "";

  title.innerHTML = `Square Eyes | ${movie.Title}`;
  nav.innerHTML = `${movie.Title}`;



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
                                      </div>
                                      <div class="purchase__container top"> 
                                        <button>
                                      </div>
                                    </div>
                                  </div>
                                </div>`
};

function forLoop(arrey, container) {
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