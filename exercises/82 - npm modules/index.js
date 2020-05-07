import wait from 'waait';
import faker from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

const diff = formatDistance(
  new Date(2020, 5, 7, 13, 23),
  new Date(2020, 7, 12, 10, 32, 0),
  {
    addSuffix: true,
  }
); //= > 'in about 1 hour'
console.log(diff);

const fakeNames = Array.from({ length: 10 }, faker.name.firstName);
// console.log(fakeNames);

async function go() {
  console.log('Going');
  await wait(200);
  console.log('end');
}
// go();

const date = new Date();

// May the 7th 2020
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}
getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 4, 19, 10];

console.log(intersection(a, b));

const person1 = { name: 'jojo' };
const person2 = { name: 'jojo' };

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === 'Wes') {
      resolve('Cool name');
      return;
    }
    reject(new Error('Bad Name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('wes'));
  if (err) {
    // deal with the err
    console.log(err);
  } else {
    console.log(successValue);
  }
}

checkName();
