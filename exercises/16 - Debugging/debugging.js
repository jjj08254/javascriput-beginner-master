const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.contry);
  console.groupEnd(`${person.name}`);
});

console.table(people)

// Console Methods

// Callstack, Stack trace

// Grabbing Elements
  // $: document.querySelector
  // $$: document.querySelectorAll
  // $0 / $1...: the last/second-last element that is clicked

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff(){
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch our');
  console.error('hey!!');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
