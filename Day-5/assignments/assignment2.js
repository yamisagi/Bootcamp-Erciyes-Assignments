const addButton = document.querySelector('.add-btn');

const numberList = document.querySelector('.list');

const randomNumber = () => Math.floor(Math.random() * 100);

const addNumbertoList = () => {
  if (numberList.children.length < 15) {
    const newNumber = document.createElement('li');
    newNumber.textContent = randomNumber();
    numberList.appendChild(newNumber);
  }

};


addButton.addEventListener('click', addNumbertoList);
