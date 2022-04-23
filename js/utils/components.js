export async function simpleFetch(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
}

export function displayError(message = "An error has occured. Please try again.") {
  return `<div class="error">${message}<button class="refresh" onClick="window.location.reload();">Reload</button></div>`;
}

