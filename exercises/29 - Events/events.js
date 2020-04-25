const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it is clicked');
}

const hooray = () => console.log('hooray');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

const buyBottons = document.querySelectorAll('button.buy');

buyBottons.forEach(buyBotton => buyBotton.addEventListener('click', hooray));
