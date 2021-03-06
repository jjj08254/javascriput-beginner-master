import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors.js';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      color =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background: ${color}">
        ${color}</span>`
    )
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if the browser supports this
  if (!('SpeechRecognition' in window)) {
    console.error('Your browser does not support');
    return;
  }
  // it does work, make a new speech recognition
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  // recognition.addEventListener('result', handleResult);
  recognition.start();
}

colorsEl.innerHTML = displayColors(colorsByLength);
start();
