const suggestContainer = document.querySelector(".bottom-section");

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


  forLoop(movieSuggestions.Search, suggestContainer);
  }
  catch(error) {
    console.log(error);
  }
};

callDetails()

function forLoop(arrey, container) {
  container.innerHTML = "";
  
    for(let i = 0; i < arrey.length; i++) {
  
      if (i === 6) {
        break;
      }
  
      container.innerHTML += `
                              <div class="card">
                                <div class="play__container">
                                  <div class="play__info">
                                    <img src="/images/square_eyes_play.png" alt="play-button">
                                  </div>
                                </div>
                                <a href="details.html?id=${arrey[i].imdbID}">
                                  <img src="${arrey[i].Poster}" alt="${arrey[i].Title}">
                                </a>
                              </div>`
    }
  };

  async function simpleFetch(url, headers) {
    const response = await fetch(url, headers);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  }