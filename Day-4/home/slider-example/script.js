const images = [
  'https://th.bing.com/th/id/OIP.YjJSBQVO5Cy9RBxwNqfj7AHaJ5?pid=ImgDet&rs=1',
  'https://i.redd.it/bfstbsaux1g21.jpg',
  'https://i.pinimg.com/736x/49/34/ab/4934ab77152acb259383c6d2abd6ef93--t--fit.jpg',
  'https://4.bp.blogspot.com/_UgNhV3_HSEM/SacUip1EQLI/AAAAAAAAATQ/TyvF83kOS9E/s1600/feos13.jpg',
];

const slider = document.getElementById('slide');

const autoImageChange = () => {
  let i = 0;
  setInterval(() => {
    if (i === images.length) {
      let answer = prompt('Do you want to continue? / yes or no');
      if (answer === 'yes') {
        i = 0;
      } else {
        clearInterval();
        slider.src =
          'https://th.bing.com/th/id/OIP.YjJSBQVO5Cy9RBxwNqfj7AHaJ5?pid=ImgDet&rs=1';
      }
    }
    slider.src = images[i];
    i++;
  }, 2000);
};

autoImageChange();
