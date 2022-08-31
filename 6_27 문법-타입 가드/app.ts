function doubleTypeFunc(a: number | string) {
  if (typeof a === 'string') {
    return a.replace('x', 'X');
  }

  // @ts-ignore
  return a.replace('Y', 'y');
}

// doubleTypeFunc(10);

function foo(a?: number | null) {
  if (a === null) return;

  console.log('display before');
  console.log(a?.valueOf());
  console.log('display after');
}

foo();

interface Foo {
  foo: string;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

console.log(isFoo({ foo: 'ok', common: 'wow' }));