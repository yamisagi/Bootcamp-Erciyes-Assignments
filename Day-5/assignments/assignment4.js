const orderList = document.querySelector('#orders');
const orderDates = document.querySelector('#order-dates');

// 1996 da aralıkta kaç adet sipariş var ? // Moment kütüphanesi kullanarak

const orderCount = orders.filter((order) => {
  const orderDate = moment(order.orderDate);
  return orderDate.isBetween('1996-12-01', '1996-12-31');
});

const li = document.createElement('li');
console.log(li);
console.log(orderList);
li.textContent = `1996 da aralıkta ${orderCount.length} adet sipariş var`;

orderList.appendChild(li);

// Geciken sipariş farkı 5 ile 10 gün arasındakileri yazdır moment diff kullanarak
// Eğer sipariş tarihi ile gereken tarih arasındaki fark 5 ile 10 gün arasındaysa
// o sipariş gecikmiş demektir.

// Eğer bu koşulu sağlayan yok ise 5 ile 10 gün arasında gecikmiş sipariş yoktur yazdır

const lateOrders = orders.filter((order) => {
  const orderDate = moment(order.orderDate);
  const requiredDate = moment(order.requiredDate);
  const diff = orderDate.diff(requiredDate, 'days');
  return diff >= 5 && diff <= 10;
});

if (lateOrders.length > 0) {
  lateOrders.forEach((order) => {
    const li = document.createElement('li');
    li.textContent = `${order.orderID} nolu sipariş gecikmiş`;
    orderList.appendChild(li);
  });
} else {
  const li = document.createElement('li');
  li.textContent = '5 ile 10 gün arasında gecikmiş sipariş yoktur';
  orderList.appendChild(li);
}

// orderDates içerisine sipariş tarihlerini ' 1 Ocak 2000 10:20 AM ' formatında yazdırın
// template literal kullanarak

orders.forEach((order) => {
  const li = document.createElement('li');
  const orderDate = moment(order.orderDate);
  li.textContent = orderDate.format('DD MMMM YYYY hh:mm A');
  orderDates.appendChild(li);
});
