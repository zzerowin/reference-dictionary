type MyObject = {
  name?: string;
  age: number;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
}

const obj = {
  name: 'zeroiwn',
  age: 25,
  getFamilyName: function () {
    return 'park';
  },
  getLastName: () => 'park',
  getBloodType() {
    return 'A'
  }
};

obj.name;
obj.age;
delete obj.name;
obj.getFamilyName();
obj.getBloodType();

class Parson {
  _bloodType: string;

  constructor(bloodType: string) {
    this.bloodType = bloodType;
  }

  set bloodType(atype: string) {
    if (atype === 'A' || atype === 'B' || atype === 'O' || atype === 'AB') {
      this._bloodType = atype;
    }
  }

  get bloodType() {
    return `${this._bloodType} 형`;
  }
}

const p1 = new Parson('A');

p1.bloodType;
p1.bloodType = 'C';

const myObj = Object.create(null, {
  name: {
    value: 'zerowin ',
    writable: false,
    configurable: true
  }
});

delete myObj.name;
