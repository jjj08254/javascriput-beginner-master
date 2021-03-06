function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const pervButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('Open Modal...');
    // First check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      return; // stop the function from running
    }
    modal.classList.add('open');

    // Event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    pervButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard..
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    pervButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // update the modal with this info
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;

    openModal();
  }

  // These are our event listeners!
  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );

  // loop over each image
  images.forEach(imgae => {
    // attach an event listener for each image
    imgae.addEventListener('keyup', e => {
      if (e.key === 'Enter') showImage(e.currentTarget);
    });
  });

  modal.addEventListener('click', handleClickOutside);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
