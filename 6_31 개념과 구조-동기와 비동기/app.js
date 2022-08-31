const p = new Promise((resolve, reject) => {
  // resolve('OK');
  setTimeout(() => {
    resolve('OK');
  }, 2000);
});

p.then((ok) => {
  console.log('첫번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('두번째 성공');
    }, 3000);
  })
})
  .then((ok) => {
    console.log(ok);
  })
  .catch((error) => {
  console.log(error);
})

function double(x) {
  return x * 2;
}

function calcValue(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 100);
}

const x = double(100);
const y = x;

const r = calcValue(20, 30, (result) => {
  console.log(result);
});
const z = r;


