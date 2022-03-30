let myName = 'park';

function foo() {
  let x = 10;

  console.log(myName);
  console.log(x);
  bar();
  zoo();

  function bar() {
    let y = 10;

    console.log(x);
    console.log(myName);
  }

  const zoo = function () {
    return null;
  };

  // console.log(y);

  if (x === 10) {
    let x = 100;

    console.log(x);
  }

  bar();
}

foo();
console.log(x);