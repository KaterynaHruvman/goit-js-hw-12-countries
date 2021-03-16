
import { errorFetch } from './notification.js';

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(() => errorFetch());
}
export default fetchCountry;