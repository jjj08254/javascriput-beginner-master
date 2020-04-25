console.log('it works');
const item = document.querySelector('.item');

const src = 'https://picsum.photos/200';
const desc = 'Cute Pup';
const myHTML = `
    <div class = 'wrapper'>
        <h2>Cute Pup</h2>
        <img src = "${src}" alt = "${desc}" />
    </div>
`;

// turn a string into a DOM element
const myFragment = document
  .createRange()
  // myFragment is 'Range': a collection of elements or part of HTML
  .createContextualFragment(myHTML);
// myFragment is 'document-fragment'
// we can access everything inside myHTML. i.e. myHTML become DOM node

document.body.appendChild(myFragment);

// item.innerHTML = myHTML;
// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);
// itemImage.classList.add('round');
