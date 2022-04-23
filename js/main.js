import { simpleFetch } from './utils/components.js';
import { displayError } from './utils/components.js';

const baseURL = "https://cloverdesign.site/wordpress/wp-json/wc/store/v1/products";
const container = document.querySelector(".film-container");

const errorMain = document.querySelector("main");

async function setup(url) {
  try {
    const movies = await simpleFetch(url);
    console.log(movies);

    movies.forEach(movie => {
      console.log(movie.id);
      container.innerHTML += `<div class="film-card" style="background-image: url('${movie.images[0].src}')">
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

setup(baseURL);