function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in!');
  }
  this.slider = slider;

  // select the elements needed for the sliders
  this.slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // // bind "this"
  // this.move = this.move.bind(this);

  // event lestenr
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.prev.classList.add('prev');
  this.current.classList.add('current');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // first strip all the classes off the current slides
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    // Make an new array of the new values,and destructure them over and into the
    // prev, current and next variables.
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is none then get the last slide from the entire slides for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
    e.preventDefault();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
    e.preventDefault();
  }
});
