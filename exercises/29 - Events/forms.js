const wes = document.querySelector('.wes');

wes.addEventListener('click', e => {
  console.log('you clicked it');
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', e => {
  const name = e.currentTarget.name.value;
  const regex = /Chad/i;
  if (name.match(regex)) {
    alert('Sorry bro');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// events
// keyup, keydown, focus, blur
