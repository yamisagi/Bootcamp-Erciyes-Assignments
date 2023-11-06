/* 
1- “  Çağatay Yıldız” isimli metindeki boşlukları kaldır.    (REPLACE)


2- “cagatay yildiz” kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)
3- “******Çağatay Yıldız” isimli metindeki yıldızları kaldır (REPLACE)
4- “Çağatay  Yıldız” metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)
5- “**Tech Career**” isimli metindeki yıldızları kaldır (REPLACE)
6- “Tech Career” isimli metnin soluna ve sağına 3 yıldız koy. “***Tech Career***” ( Normal toplama operatörü)

7- “Tech Career Bilişim teknolojileri” metnindeki son kelimeyi büyült (SUBSTRING)
8- “Tech Career” kelimelerin ilk harflerini büyült (Substring ve upper)
*/

// 1.

let cagatayName = ' Çağatay Yıldız';

console.log(cagatayName.replace(' ', ''));

// 2.

let cagatayName2 = 'cagatay yildiz';

let deleteSpace = cagatayName2.replace(' ', '');

console.log(deleteSpace.toUpperCase());

// 3.

let cagatayName3 = '******Çağatay Yıldız';

console.log(cagatayName3.replaceAll('*', ''));

// 4.

let cagatayName4 = 'Çağatay  Yıldız';

console.log(cagatayName4.replace('  ', ' '));

// 5.

let techCareerName = '**Tech Career**';

console.log(techCareerName.replaceAll('*', ''));

// 6.

let techCareerName2 = 'Tech Career';

console.log('***' + techCareerName2 + '***');

// 7.

let techCareerName3 = 'Tech Career Bilişim teknolojileri';

let lastWord = techCareerName3.substring(techCareerName3.lastIndexOf(' ') + 1);

let upperLastWord = lastWord.toUpperCase();

console.log(
  techCareerName3.substring(0, techCareerName3.lastIndexOf(' ')) +
    ' ' +
    upperLastWord
);
// 8.

let techCareerName4 = 'tech career';

// Bunun için bir fonksiyon yazabiliriz.

const toUpper = (str) => {
  let firstLetter = str.substring(0, 1);
  let otherLetters = str.substring(1);
  return firstLetter.toUpperCase() + otherLetters;
};

let firstWord = techCareerName4.substring(0, techCareerName4.indexOf(' '));
let secondWord = techCareerName4.substring(techCareerName4.indexOf(' ') + 1);

console.log(toUpper(firstWord) + ' ' + toUpper(secondWord));
