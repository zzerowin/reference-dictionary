
const c1 = {
  name: 'C1',
  color: 'red'
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

function Foo(name) {
  this.name = name
  this.__proto__ = Foo.prototype;
}

Foo.prototype.lastName = 'Woowa';

const f = new Foo('Park young seung');

console.log(f);
console.log(f.lastName);