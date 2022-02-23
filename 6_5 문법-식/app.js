const colors = ['red', 'yellow', 'black'];
const Colors = {
  blue: 'blue',
  red: 'reb',
  white: 'white',
}

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [red, blue, black] = colors;
const { blue, red, white} = Colors

console.log(colors[1]);


let a = 10;
let b = '10';

if (a === b) {
  a = 0;
} else {
  a = 1;
}

a = (a === b) ? 0 : 1;

(function foo() {

});