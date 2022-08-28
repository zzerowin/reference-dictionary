type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
}

const obj: MyObject = {
  name: 'Yeoung Seung',
  age: 25,
  getFamilyName: function () {
    return 'Park';
  },
  getLastName: () => 'Park',
  getBloodType() {
    return 'A';
  },
};

obj.name;
obj.age;
delete obj.name;
obj.getFamilyName();
obj.getBloodType();

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(atype: string) {
    if (atype === 'B' || atype === 'A' || atype === 'O' || atype === 'AB') {
      this._bloodType = atype;
    }
  }

  get bloodType() {
    return this._bloodType;
  }
}

const p1 = new Person('A');

p1.bloodType;
p1.bloodType = 'C';

const myObj = Object.create(null, {
  name: {
    value: 'Park Yeoung Seung',
    writable: false,
    configurable: false
  }
})

delete myObj.name;