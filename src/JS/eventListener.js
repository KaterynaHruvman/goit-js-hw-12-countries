import debounce from 'lodash.debounce';
import refs from './refs.js';
import fetchCountry from './fetchCountries.js';
import updateMarkup from './updateMarcup.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    const searchQuery = event.target.value;
    refs.container.innerHTML = '';
  const inputValue = refs.input.value.trim();
if (!inputValue) {
return
}
    fetchCountry(searchQuery).then(updateMarkup);
  }, 500),
  
);