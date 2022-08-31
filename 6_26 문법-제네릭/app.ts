type User = {
  id: number;
  name: string;
}
type Address = {
  zipcode: number,
  address: string;
};

function pipeOne(value: any): any {
  return value;
}

function pipeTwo<T>(value: T): T {
  return value;
}

let p1 = pipeOne(10);
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

const pipeObjectOne = <T>(obj: T): T => {
  return obj;
}

let po1 = pipeObjectOne({ id: 1, name: '박', zipcode: 50213 });

// let po2 = pipeObjectOne<User>({id: 1, name: '박', zipcode: 50213});

class State<S, Config = {}> {
  private readonly _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address, { active: boolean }>({
  zipcode: 50213,
  address: '서울시',
}, {
  active: true
})

const s1Data = s1.getState();
console.log(s1Data.zipcode, s1Data.address, s1.config.active);

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
// getProperty(x, 'm');  // 타입 체크 'm'은 안됨

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'Park' };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };

console.log(kv1, kv2);