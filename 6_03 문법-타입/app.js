

function addAge(age) {
  if (typeof age === "number") {
    return age + 1;
  } else {
    throw 'ERROR!!';
  }
}

let age = addAge(55);
console.log(age);

age = 10;
age = false;
age = {};