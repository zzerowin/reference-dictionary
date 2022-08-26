
const colors = ['red', 'yellow', 'black'];
const Colors = {
  blue: 'blue',
  green: 'green',
  white: 'white',
};

// const red = colors[0]
// const yellow = colors[1];
// const blue = colors[2];

// 구조 분해 할당
const [red, yellow, blue] = colors;
const { white, green } = Colors;

let a = 10;
let b = '10';

if (a === b) {
  a = 0;
} else {
  a = 1;
}

// 삼항 연산자
a = (a === b) ? 0 : 1;


// typeof 연산자
const myFun = new Function('5 + 2'); // function
const shape = 'round'; // string
const size = 1; // number
const foo = ['apple', 'banana', 'orange']; // object
const today = new Date(); // object
const un = undefined; // undefined

console.log(typeof myFun);
console.log(typeof shape);
console.log(typeof size);
console.log(typeof foo);
console.log(typeof today);
console.log(typeof un);

// 함수 -> 문
(function foo() {

});
