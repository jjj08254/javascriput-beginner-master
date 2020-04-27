const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('Removing Disabled');
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
  // payload[0].isIntersecting: whether it's on the page
  // intersectionRatio: how many % is it on the page
}

// intersection observer
const ob = new IntersectionObserver(obCallback, {
  root: terms, // default is body
  threshold: 1, // [0, 0.5, 1] trigger when the ratio is...
});

ob.observe(terms.lastElementChild);
