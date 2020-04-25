// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the textContent property on that elment
// // heading.textContent = 'Wes is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes!
const pic = document.querySelector('.nice');

function toggleRound(){
    pic.classList.toggle('round');
    
}

pic.addEventListener('click',toggleRound);
pic.alt = 'Cute Pup'; // setter
pic.width = 200;
console.log(pic.naturalWidth) // getter

pic.addEventListener('load', () => {
    console.log(pic.naturalWidth) // getter
})

pic.setAttribute('alt', 'REALLY CUTE PUP');
    // setAttribute can set unstandard attribute
console.log(pic.getAttribute('alt'));


const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}` )
})