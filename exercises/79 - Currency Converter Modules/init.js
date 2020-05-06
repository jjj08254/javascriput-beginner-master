import { fromSelect, toSelect } from './element.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

export function init() {
  // this run when page load
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);

  // populate the option element
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
