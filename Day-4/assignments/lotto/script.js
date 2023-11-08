// Wrong Solution

// var randomNumbers = []

// for(i = 0; i < 6; i++){
//     var randomNumber = Math.floor(Math.random() * 49)
//     randomNumbers.push(randomNumber)
// }

const boxes = document.querySelectorAll('.box');
console.log(boxes);
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
  let numbers = uniqueRandomArray();
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    boxes[i].textContent = numbers[i];
  }
});

const uniqueRandomArray = () => {
  let numbers = [];

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 49);
    if (numbers.includes(randomNumber)) {
      i--; // Numara zaten Array içerisinde var ise tekrar döngüye girsin diye i değerini azaltıyoruz.
    } else {
      numbers.push(randomNumber);
    }
  }
  return numbers;
};
