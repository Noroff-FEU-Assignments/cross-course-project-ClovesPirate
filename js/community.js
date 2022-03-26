import { displayError } from "./utils/components.js";
import { renderSuggestions } from "./utils/components.js";
import { simpleFetch } from "./utils/components.js";

const suggestContainer = document.querySelector(".bottom-section");
const errorMain = document.querySelector("main");

const searchArray =["earth", "journey", "alien", "fly", "sad", "death", "dragon", "cat", "storm", "family", "avenger"];
const randomElement = [Math.floor(Math.random() * searchArray.length)];
const searchParams = searchArray[randomElement];

const suggestionURL = 'https://imdb-data-searching.p.rapidapi.com/om?s=' + searchParams;

const options = { "headers": {
  'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
	"x-rapidapi-key": "9f4abe256cmshb615b7eda81776cp17607ajsn94b7372ba1af"
}};

async function callDetails() {
  try {
  const movieSuggestions = await simpleFetch(suggestionURL, options);
  console.log(movieSuggestions);


  renderSuggestions(movieSuggestions.Search, suggestContainer);
  }
  catch(error) {
    errorMain.innerHTML = displayError();
    console.log(error);
  }
};

callDetails()

  