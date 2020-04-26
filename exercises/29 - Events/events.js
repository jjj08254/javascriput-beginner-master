const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it is clicked');
}

const hooray = () => console.log('hooray');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

const buyBottons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(e) {
  console.log('You clicked a button!');

  const button = e.target;
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  // event.target is the thing actually got clicked
  // event.currentTarget is thing that fired the event

  // stop this event from bubbling up
  // event.stopPropagation();
}

// prettier-ignore
buyBottons.forEach(buyBotton => buyBotton.addEventListener('click', handleBuyButtonClick));
// prettier-ignore
window.addEventListener('click', e => {
  console.log('you click the window');
  console.log(e.target);
  console.log(e.type);
  console.log(e.bubbles);
  // e.stopPropagation();
}, {capture : true});
// capture true: goes from top to down instead of bubbling up

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', e => {
  console.log(e.currentTarget);
  console.log(this);
});
