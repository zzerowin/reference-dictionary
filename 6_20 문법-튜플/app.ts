const address: [number, string, string] = [14023, '서울시', '송파구'];

let [zipcode, address1] = address;

// type number -> string X
// zipcode = '12345';

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
  ['헨리 8세', '세익스피어', 1884],
  ['헨리 8세', '세익스피어', 1884],
];

BookData.push(['a', 'b', 23]);

function getArrayOne(): any[] {
  return [14023, '서울시', '송하구'];
}

type Address = [number, string, string];

function getArrayTwo(): Address {
  return [14023, '서울시', '송파구'];
}

let address2 = getArrayTwo()[2];

// type string -> number X
// address2 = 12;