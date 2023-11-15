const ul = document.getElementById('ul');
const length = document.querySelector('.length');
const btn = document.getElementById('btn');
const API = 'https://northwind.vercel.app/api/products';

const getProducts = async () => {
  ul.innerText = ' ';

  try {
    const res = await axios.get(API);
    res.data.forEach((product) => {
      const li = document.createElement('li');
      li.innerHTML = `
                ${product?.name ?? 'No Name'} -  ${product?.unitPrice ?? 'No Price Info'}  
            `;
      ul.appendChild(li);
    });

    length.innerHTML = `Toplam Ürün: ${res.data.length}`;
  } catch (err) {
    console.error(err);
  }
};

btn.addEventListener('click', () => getProducts());
