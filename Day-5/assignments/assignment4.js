const orderList = document.querySelector('#orders');
const orderDates = document.querySelector('#order-dates');

const orderCount = orders.filter((order) => {
  const orderDate = moment(order.orderDate);
  return orderDate.isBetween('1996-12-01', '1996-12-31');
});

const li = document.createElement('li');
li.textContent = `1996 da aralıkta ${orderCount.length} adet sipariş var`;

orderList.appendChild(li);

const lateOrders = orders.filter((order) => {
  const orderDate = moment(order.orderDate);
  const requiredDate = moment(order.requiredDate);
  const diff = orderDate.diff(requiredDate, 'days') * -1;
  return diff >= 5 && diff <= 40; // 5 ile 10 gün arasında gecikmiş sipariş yoktur listede o yüzden 40 a kadar aldım
});

if (lateOrders.length > 0) {
  const li = document.createElement('li');
  li.textContent = `${lateOrders.length} adet sipariş gecikmiş`;
  orderList.appendChild(li);
} else {
  const li = document.createElement('li');
  li.textContent = '5 ile 10 gün arasında gecikmiş sipariş yoktur';
  orderList.appendChild(li);
}

orders.forEach((order) => {
  const li = document.createElement('li');
  const orderDate = moment(order.orderDate);
  li.textContent = orderDate.format('DD MMMM YYYY hh:mm A');
  orderDates.appendChild(li);
});
