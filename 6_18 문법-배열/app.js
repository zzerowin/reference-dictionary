const books = [];

books[0] = '헨리 6세 제1부';
books[1] = '헨리 6세 제2부';
books[2] = '헨리 6세 제3부';

books.push('리처드 3세');
books.push('실수 연발');
books.push('말광량이 길들이기');

console.log(books);
console.log(books.length);

books.pop(); // pop 맨 마지막 데이터
books.pop();

console.log(books);
console.log(books.length);

const oneBooks = books.slice(1, 2); // 데이터는 빼오지만 원본배열을 건들지 아니함
console.log(oneBooks);
console.log(books);
console.log(books.length);

const twoBooks = books.splice(1, 2, '헴릿', '오셀로', '리어왕');
console.log(twoBooks);
console.log(books);
console.log(books.length);

twoBooks.shift();

console.log(twoBooks);

twoBooks.unshift('한여름 밤의 꿈');
console.log(twoBooks);

const allBooks = books.join();
console.log(allBooks);

const newBooks = allBooks.split(',');
console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

const nextBooks = oneBooks.concat(twoBooks);
console.log(nextBooks);

const nextBookList = [...oneBooks, ...twoBooks];
console.log(nextBookList);

