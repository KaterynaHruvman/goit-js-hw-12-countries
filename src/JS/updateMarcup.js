import refs from '../JS/refs.js';
import countriesList from '../templates/countries-list.hbs';
import oneCountry from '../templates/one-country.hbs';
import {errorFetch,  errorQuerySpecific  } from './notification.js';

function updateMarkup(data) {
  if (data.length === 1) {
    MarkupOne(data);
    return;
  }
  if (data.length > 2 && data.length <= 10) {
    MarkupList(data);
    return;
  }
  if (data.length > 10) {
    errorQuerySpecific();
    return;
  } else {
    errorFetch();
    return;
  }
}
function MarkupOne(data) {
  const markup = oneCountry(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
function MarkupList(data) {
  const markup = countriesList(data);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;