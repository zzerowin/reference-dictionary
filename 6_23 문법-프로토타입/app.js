
const c1 = {
  name: 'C1',
  color: 'red',
}

const c2 = {
  name: 'C2',
  width: 300,
}

const c3 = {
  name: 'C3',
  height: 100,
}

c1.__proto__ = c3;
c3.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.width);

function Foo(name, age) {
  this.name = name;
  this.age = age;
  this.__proto__ = Foo.prototype;
}

Foo.prototype.lastName = '우와';

const f = new Foo('박영승', 23);

console.log(f.name);
console.log(f.age)
console.log(f.lastName);

