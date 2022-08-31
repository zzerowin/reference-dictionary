
let myName = 'Park';

function foo() {
  let x = 10;

  console.log(myName);
  console.log(x);
  bar(); // 호이스팅
  // zoo(); // 함수문이 아니라 함수식이기 때문에 호이스팅 불가 X

  function bar() {
    let y = 10;

    console.log(x);
    console.log(myName);
  }

  const zoo = () => {

  }

  // console.log(y); // X

  if (x === 10) {
    let x = 100;

    console.log(x);
  }
  bar();
}

foo();
// console.log(x); // X