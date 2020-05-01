const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold out state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return; // if name it's empty, then don't submit it
  const item = {
    name,
    id: Date.now(), // as long as not writing data within milisec
    complete: false,
  };

  // push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} item(s) in your state`);
  // clear the form
  e.currentTarget.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `
      <li class="shopping-item">
      <input 
        type="checkbox" 
        value = "${item.id}"
        ${item.complete ? 'checked' : ''}
      >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
      </li>
  `
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach(item => items.push(item));
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleted item', id);
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: we listen on the click on the list <ul>
// but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', e => {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    // matches check "element"
    deleteItem(id);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
