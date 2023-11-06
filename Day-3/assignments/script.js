// 250'ye kadar olan sayıların toplamı nedir?

let sum = 0;
for (let i = 0; i <= 250; i++) {
  sum += i;
}

console.log(sum);

///////////////////////////////////////////////

//25 ile 125 arasındakş sayıların toplamı nedir?

let summ = 0;
for (let i = 25; i <= 125; i++) {
  sum += i;
}
console.log(sum);

///////////////////////////////////////////////

// 1 ile 1000 arasındaki sayıların toplamının ortalaması nedir ?

let summm = 0;

for (let i = 1; i <= 1000; i++) {
  summm += i;
}

console.log(summm / 1000);

///////////////////////////////////////////////

// Birden yüze kadarki sayılardan, 5'e bölünenleri ekrana yazdırın.

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

///////////////////////////////////////////////

var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11];

// Dizinin en büyük sayısını for döngüsü kullanarak bulunuz.

let max = numbers[0]; // En büyük sayının ilk eleman olduğunu varsayıyoruz.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

// Dizinin en küçük sayısını for döngüsü kullanarak bulunuz.

let min = numbers[0]; // En küçük sayının ilk eleman olduğunu varsayıyoruz.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(min);
