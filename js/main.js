import { renderSuggestions } from './utils/components.js';
import { simpleFetch } from './utils/components.js';
import { displayError } from './utils/components.js';

const searchArray = ["water", "fire", "alien", "lord", "dark", "life", "dragon", "ring", "storm", "family", "avenger, "];
const searchArray2 = ["wing", "like", "time", "green"];

const randomElement = [Math.floor(Math.random() * searchArray.length)];
const randomElement2 = [Math.floor(Math.random() * searchArray2.length)];

const searchParams = searchArray[randomElement];
const searchParams2 = searchArray2[randomElement2];

const actionURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=main';
const dramaURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=action';
const scifiURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=space';
const fantasyURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=ring';
const thrillerURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=space';
const promoURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=' + searchParams;
const favoritesURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=' + searchParams2;


const options = { "headers": {
  'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
	"x-rapidapi-key": "9f4abe256cmshb615b7eda81776cp17607ajsn94b7372ba1af"
}};

const actionContainer = document.querySelector(".container__action");
const dramaContainer = document.querySelector(".container__drama");
const scifiContainer = document.querySelector(".container__scifi");
const thrillerContainer = document.querySelector(".container__thriller");
const fantasyContainer = document.querySelector(".container__fantasy");
const promoContainer = document.querySelector(".promo__container");
const favoritesContainer = document.querySelector(".favorite__container");
const errorMain = document.querySelector("main");

async function renderMovies() {
  try {
    const actionMovies = await simpleFetch(actionURL, options);
    const dramaMovies = await simpleFetch(dramaURL, options);
    const scifiMovies = await simpleFetch(scifiURL, options);
    const fantasyMovies = await simpleFetch(fantasyURL, options);
    const thrillerMovies = await simpleFetch(thrillerURL, options);
    const promoMovies = await simpleFetch(promoURL, options);
    const favoriteMovies = await simpleFetch(favoritesURL, options);

    renderSuggestions(thrillerMovies.Search, thrillerContainer);
    renderSuggestions(fantasyMovies.Search, fantasyContainer);
    renderSuggestions(scifiMovies.Search, scifiContainer);
    renderSuggestions(actionMovies.Search, actionContainer);
    renderSuggestions(dramaMovies.Search, dramaContainer);
    promoLoop(promoMovies.Search, promoContainer);
    promoLoop(favoriteMovies.Search, favoritesContainer);
  }
  catch (error) {
    errorMain.innerHTML = displayError();
    console.log(error);
  }
};

renderMovies();

function promoLoop(arrey, container) {
  container.innerHTML = "";

  for(let i = 0; i < arrey.length; i++) {

    if (i === 3) {
      break;
    }

    container.innerHTML += `
                            <div class="promo__card">
                              <div class="play__container">
                                <div class="play__info">
                                  <img src="/images/square_eyes_play.png" alt="play-button">
                                </div>
                              </div>
                              <a href="details.html?id=${arrey[i].imdbID}">
                                <img class="promo__img" src="${arrey[i].Poster}" alt="${arrey[i].Title}">
                              </a>
                            </div>`
  }
};


