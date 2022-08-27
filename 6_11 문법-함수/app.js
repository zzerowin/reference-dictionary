function myFn(x) {
  return x + 100;
}

function sum(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s += args[i]
  }
  return s;
}

const sumV2 = (a, b, ...args) => {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }

  return s;
}

const ten = (x, y) => {
  return 100 + x + y;
}

console.log('ten 함수실행: ' + ten(1000, 2000));

const result = myFn(10);
console.log('myFn 함수실행: ' + result);

const abcSum = sum(10, 20, 30, 40, 50);
console.log('sum 함수실행: ' + abcSum);

const myFnV2 = function () {
  return 100;
}

const arr = [10, 20, 30, 40, 50];

myFnV2();
sum.call(null, 10, 20, 30, 40);
sum.apply(null, arr);

(function () {
  console.log('즉시 실행 함수 실행!');
}());

// 제너레이터(생성기)
function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());

// 비동기
async function myTask() {

}
