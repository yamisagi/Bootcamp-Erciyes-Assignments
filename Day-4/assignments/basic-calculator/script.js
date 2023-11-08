
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const mulBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const squarerootBtn = document.querySelector('#square-root');
const result = document.querySelector('#result');

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
mulBtn.addEventListener('click', multiply);
divBtn.addEventListener('click', divide);
squarerootBtn.addEventListener('click', squareRoot);


function add() {
  result.innerHTML = Number(input1.value) + Number(input2.value);
  input1.value = '';
  input2.value = '';
}

function subtract() {
  result.innerHTML = Number(input1.value) - Number(input2.value);
  input1.value = '';
  input2.value = '';
}

function multiply() {
  result.innerHTML = Number(input1.value) * Number(input2.value);
  input1.value = '';
  input2.value = '';
}

function divide() {
  result.innerHTML = Number(input1.value) / Number(input2.value);
  input1.value = '';
  input2.value = '';
}

function squareRoot() {
  result.innerHTML = Math.sqrt(Number(input1.value)).toFixed(2);
  input1.value = '';
  input2.value = '';
}
