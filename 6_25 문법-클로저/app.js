

function increment() {
  let saveNumber = 1;

  return () => {
    return saveNumber++;
  };
}

const inc = increment();

console.log(inc());
console.log(inc());
console.log(inc());

