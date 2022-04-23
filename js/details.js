import { simpleFetch } from './utils/components.js';

const container = document.querySelector(".film-container");
const suggestContainer = document.querySelector(".film-suggestions");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const filmID = params.get("id");
console.log(filmID);

const detailsURL = "https://cloverdesign.site/wordpress/wp-json/wc/store/v1/products/" + filmID;

const baseURL = "https://cloverdesign.site/wordpress/wp-json/wc/store/v1/products";

async function setup(url) {
 const movieDetails = await simpleFetch(url);
 console.log(movieDetails);

 const price = movieDetails.prices.regular_price / 100;

 container.innerHTML = `<div class="details-film">
                          <div class="details-image">
                            <img src="${movieDetails.images[0].src}">
                            <button id="purchase-button"><img class="play-button" src="images/play-button.svg"></button>
                          </div>
                          <div class="details-body">
                            <h1>${movieDetails.name}</h1> 
                            <p>${movieDetails.description}</p>
                                <a href="#">
                                  ${movieDetails.categories[0].name}
                                </a>
                                <a href="#">
                                  ${movieDetails.categories[1].name}
                                </a>
                        </div>`
}

setup(detailsURL);

async function renderSuggestions(url) {
  try {
    const movies = await simpleFetch(url);
    console.log(movies);

    movies.forEach(movie => {
      console.log(movie.id);
      suggestContainer.innerHTML += `<div class="film-card" style="background-image: url('${movie.images[0].src}')">
                                <a href="details.html?id=${movie.id}">
                                  <div class="anchor">
                                  <h3>${movie.name}</h3>
                                  </div
                                </a>
                              </div>`
    });
  }
  catch (error) {
    errorMain.innerHTML = displayError();
    console.log(error);
  }
};

renderSuggestions(baseURL)