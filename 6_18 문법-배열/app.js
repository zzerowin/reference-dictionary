const books = [];

books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

books.push("자르반 4세");
books.push("실수 연발");
books.push("말괄량이 길들이기");

console.log(books);
console.log(books.length)

books.pop();
books.pop();

console.log(books);
console.log(books.length)

const oneBooks = books.slice(1, 2);

console.log(oneBooks);
console.log(books);
console.log(books.length);

const twoBooks = books.slice(1, 2, "헴릿", "오셀로", "리어왕")

console.log(twoBooks);
console.log(books);
console.log(books.length);
