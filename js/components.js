export function forLoop(arrey, container) {
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

export function promoLoop(arrey, container) {
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

export async function simpleFetch(url, headers) {
  const response = await fetch(url, headers);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

