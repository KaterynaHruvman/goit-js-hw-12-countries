import SearchCountries from '.fetchCountries';
import '../node_modules/lodash';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import templatesOneCountry from '../templates/oneCountry.hbs';
import templatescountriesItem from '../templates/countriesItem';

const refs = {
  input: document.querySelector('.input'),
  listItemCountrie: document.querySelector('.listItemCountrie'),
};

refs.input.addEventListener('input', _.debounce(searchCountries, 5000));

function searchCountries(e) {
  const searchValue = e.target.value;
  clearList();

  SearchCountries.fetchCountries(searchValue).then(data => {
    if (data.length > 10) {
      PNotify.error({
        text: 'Too many matches found. Please enter a more specific query!',
      });
    } else if (data.length > 1) {
      const markuplist = buildListMarkupList(data);
      insertItemCountrie(markuplist);
    } else {
      const markupItem = buildListMarkupItem(data);
      insertItemCountrie(markupItem);
    }
  });
}

function insertItemCountrie(items) {
  refs.listItemCountrie.insertAdjacentHTML('beforeend', items);
}

function buildListMarkupItem(items) {
  return templatesOneCountry(items);
}

function buildListMarkupList(items) {
  return templatescountriesItem(items);
}

function clearList() {
  refs.listItemCountrie.innerHTML = '';
}