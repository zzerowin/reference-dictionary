/*
문자열 포맷: id, item, price, discount
 */

const cartItems = [
  { id: 1, item: '핸드밀', price: 40000, discount: 0},
  { id: 2, item: 'A4용지', price: 4000, discount: 0},
  { id: 3, item: '수영복', price: 120000, discount: 0},
  { id: 4, item: '색연필72색', price: 150000, discount: 0},
];

const cartItemArray = [];

for (const item of cartItems) {
  const row = [];

  for (const [, value] of Object.entries(item)) {
    row.push(value);
  }

  cartItemArray.push(row.join());
}

console.log(cartItemArray.join('==='));

const extractValueInObject = obj => Object
  .entries(obj)
  .map(([, value]) => String(value));

const cartItemsString = cartItems
  .map(extractValueInObject)
  .join('===');

console.log(cartItemsString);