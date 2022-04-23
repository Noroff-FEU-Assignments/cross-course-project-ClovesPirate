
const baseURL = "https://cloverdesign.site/wordpress/wp-json/wc/store/products";

async function getProduct(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
}

getProduct(baseURL);