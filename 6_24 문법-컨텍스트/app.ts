
const person = {
  name: 'Park young seung',
  age: 25,
  getAge() {
    return this.age;
  }
};

person.age;
person.getAge();

const age = person.getAge;

// age();

age.call(person);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.getAge = this.getAge.bind(this);
  }

  getAge() {
    return this.age;
  }

  getName = () => this.name;
}

const p1 = new Person('Park youngseung', 21);

p1.getAge();

const myAge = p1.getAge;

myAge();

p1.getName();

const x = p1.getName;
x();