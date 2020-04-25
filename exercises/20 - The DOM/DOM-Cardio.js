// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
// add three list items with the words "one, two three" in them
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/200';
// set the width to 250
image.width = 250;
image.height = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
const HTML = document.createElement('div');
HTML.innerHTML = `
    <p>I am the first paragraph</p>
    <p>I am the second paragraph</p>
`;
// put this div before the unordered list from above
const ulElement = document.querySelector('ul');
ulElement.insertAdjacentElement('beforebegin', HTML);
// add a class to the second paragraph called warning
const paragraphs = document.querySelectorAll('.wrapper p');
const secondParagraph = paragraphs[1];
secondParagraph.classList.add('warning');
// remove the first paragraph
paragraphs[0].remove();
//
//
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
        <div class = 'playerCard'>
            <h2>${name} - ${age}</h2>
            <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
        <button class="delete">&times; Delete</button>
        </div>
    `;
}
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('jack', 12, 100);
cardsHTML += generatePlayerCard('dan', 11, 40);
cardsHTML += generatePlayerCard('mike', 9, 80);
cardsHTML += generatePlayerCard('sam', 8, 50);
// append those cards to the div
newDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', newDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(e) {
  const clickedButton = e.target;
  console.log(e.target.parentNode);
  //   clickedButton.parentElement.remove();
  clickedButton.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
