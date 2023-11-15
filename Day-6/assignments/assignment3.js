const BASE_URL = 'https://northwind.vercel.app/api/customers';

const table = document.getElementById('data-table');
const deleteForm = document.getElementById('delete-form');
const companyForm = document.getElementById('company-form');

const getData = async () => {
  try {
    const res = await axios.get(BASE_URL);
    // Reverse the data to show the latest data first, it is good practice :)
    res.data.reverse();
    console.log(res.data);

    let tableHTML = `
      <thead>
        <tr>
          <th>#</th>
          <th>Customer ID</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Contact Title</th>
        </tr>
      </thead>
      <tbody>`;

    res.data.forEach((customer, index) => {
      tableHTML += `
        <tr>
          <th>${index + 1}</th>
          <td>${customer.id}</td>
          <td>${customer.companyName}</td>
          <td>${customer.contactName}</td>
          <td>${customer.contactTitle}</td>
        </tr>`;
    });

    tableHTML += `</tbody>`;
    table.innerHTML = tableHTML;
  } catch (error) {
    console.error('Error:', error);
  }
};

const addData = async () => {
  try {
    let companyName = document.getElementById('company-name').value;
    let contactName = document.getElementById('contact-name').value;
    let contactTitle = document.getElementById('contact-title').value;
    if (!companyName || !contactName || !contactTitle) {
      alert('Please fill all the fields');
      return;
    }
    const newData = {
      companyName,
      contactName,
      contactTitle,
    };

    await axios.post(BASE_URL, newData);
    getData();

    document.getElementById('company-name').value = '';
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-title').value = '';
  } catch (error) {
    console.error('Error adding data:', error);
  }
};

const removeData = async () => {
  try {
    let idDelete = document.getElementById('delete-id').value;
    console.log(idDelete);
    await axios.delete(`${BASE_URL}/${idDelete}`);
    getData();
    document.getElementById('delete-id').value = '';
  } catch (error) {
    alert('Please enter a valid ID');
    console.error('Error deleting data:', error);
  }
};

deleteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  removeData();
});

companyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addData();
});
