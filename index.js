let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

function isEven(num) {
  return num % 2 === 0;
}

function addNumber(number) {
  numberBank.push(number);
  renderApp(); 
}

function sortOne() {
  if (numberBank.length > 0) {
    const number = numberBank.shift(); 
    if (isEven(number)) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    renderApp(); 
  }
}

function sortAll() {
  while (numberBank.length > 0) {
    sortOne(); 
  }
}

function renderForm() {
  const form = document.createElement('form');
  const heading = document.createElement('h1');
  heading.textContent = 'Odds And Events';
  const textLine = document.createElement('p');
  textLine.textContent = 'Add a number to the bank';
  const input = document.createElement('input');
  input.type = 'number'; 
  input.id = 'number-input';

  const addButton = document.createElement('button');
  addButton.textContent = 'Add number';
  addButton.type = 'button'; 

  form.appendChild(heading);
  form.appendChild(textLine);
  form.appendChild(input);
  form.appendChild(addButton);

  addButton.addEventListener('click', () => {
    const number = parseInt(input.value); 
    if (!isNaN(number)) { 
      addNumber(number);
      input.value = ''; 
    } 
  });

  return form;
}

function renderNumberBank() {
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = 'Number Bank';
  const list = document.createElement('ul');

  numberBank.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    list.appendChild(li);
  });

  div.appendChild(heading);
  div.appendChild(list);
  return div;
}

function renderOddNumbers() {
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = 'Odd Numbers';
  const list = document.createElement('ul');

  oddNumbers.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    list.appendChild(li);
  });

  div.appendChild(heading);
  div.appendChild(list);
  return div;
}

function renderEvenNumbers() {
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = 'Even Numbers';
  const list = document.createElement('ul');

  evenNumbers.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    list.appendChild(li);
  });

  div.appendChild(heading);
  div.appendChild(list);
  return div;
}

function renderSortButtons() {
  const div = document.createElement('div');
  const sortOneButton = document.createElement('button');
  sortOneButton.textContent = 'Sort 1';
  const sortAllButton = document.createElement('button');
  sortAllButton.textContent = 'Sort All';

  div.appendChild(sortOneButton);
  div.appendChild(sortAllButton);

  sortOneButton.addEventListener('click', sortOne);
  sortAllButton.addEventListener('click', sortAll);

  return div;
}

function renderApp() {
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = ''; 

  appContainer.appendChild(renderForm());
  appContainer.appendChild(renderSortButtons());
  appContainer.appendChild(renderNumberBank());
  appContainer.appendChild(renderOddNumbers());
  appContainer.appendChild(renderEvenNumbers());
}

renderApp();