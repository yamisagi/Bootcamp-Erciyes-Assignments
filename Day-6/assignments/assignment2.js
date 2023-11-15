const form = document.getElementById('productForm');
const productList = document.getElementById('productList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});

const submitForm = async () => {
  let name = form.elements['name'].value;
  let unitPrice = form.elements['unitPrice'].value;
  let unitsInStock = form.elements['unitsInStock'].value;

  let numberUnitPrice = Number(unitPrice);
  let numberUnitsInStock = Number(unitsInStock);

  if (numberUnitPrice <= 0 || numberUnitsInStock <= 0) {
    alert('Values should be greater than zero');
    return;
  } else if (isNaN(numberUnitPrice) || isNaN(numberUnitsInStock)) {
    alert('Please enter numerical values');
    return;
  }

  try {
    const newProduct = {
      name,
      unitPrice: numberUnitPrice,
      unitsInStock: numberUnitsInStock,
    };

    const res = await axios.post(
      'https://northwind.vercel.app/api/products',
      newProduct
    );
    getProducts();
    console.log('Success', res.data);
  } catch (err) {
    console.error('Error', err);
  }
};

const getProducts = async () => {
  try {
    const res = await axios.get('https://northwind.vercel.app/api/products');
    console.log('Success', res.data);
    const products = res.data;
    // reverse the array to show the latest product at the top
    products.reverse();
    console.log(products);
    products.forEach((product) => {
      const li = document.createElement('li');
      li.textContent = `${product?.name ?? 'No Product Name'} - ${
        product?.unitPrice ?? 'No Product Price'
      } - ${product?.unitsInStock ?? 'No Product Stock'}`;
      productList.appendChild(li);
    });
  } catch (err) {
    console.error('Error', err);
  }
};
