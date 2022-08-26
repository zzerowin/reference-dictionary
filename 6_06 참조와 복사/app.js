
let a = 10;
let b = a;
b = 20;
console.log(a) // 10
console.log(b) // 20

// 객체는 복사되지 않고 늘 참조 된다.
let o = {
  isLoading: false,
}

function foo(o) {
  o.isLoading = true;
}

foo(o);

console.log('done');
