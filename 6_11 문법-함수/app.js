function myFn(x) {
  return x + 100;
}

function sum(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
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
  return 100 + x;
}
ten(10, 20)

const result = myFn(10);
const abcSum = sum(10, 20, 30, 40, 50, 60);

console.log(abcSum);

const myFunV2 = function () {
  return 100;
};

const arr = [10, 20, 30, 40, 50]

myFunV2();
sum.call(null, 10, 20, 30);
sum.apply(null, arr);

(function () {
  console.log('즉시 실행 함수 실행')
})();

function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();


g.next();
g.next();
g.next();

async function myTask() {

}



