const addButton = document.querySelector('.add-btn');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

const nameList = document.querySelector('.list');

const addName = () => {
  const name = nameInput.value;
  const surname = surnameInput.value;

  if (name.trim() === '' || surname.trim() === '') {
    return;
  }
  const newName = document.createElement('li');
  const deleteButton = document.createElement('button');
  newName.classList.add('name');
  newName.textContent = `${name} ${surname}`;
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  newName.appendChild(deleteButton);
  nameList.appendChild(newName);

  nameInput.value = '';
  surnameInput.value = '';
};

const deleteName = (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
};

nameList.addEventListener('click', deleteName);

addButton.addEventListener('click', addName);
