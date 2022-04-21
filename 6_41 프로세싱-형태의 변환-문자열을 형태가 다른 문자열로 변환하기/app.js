// 문자열을 형태가 다른 문자열로 변환하기

const simpleCamel = (text, splitter = ' ') => text.split(splitter)
  .map((word, wi) => word.split('')
    .map((c, ci) => wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase())
    .join(''))
  .join('');

function convertCamelName(name) {
  let camelName = '';

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] === ' ') {
      newSpace = true;
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

const camelName1 = convertCamelName('park zero win');
const camelName2 = simpleCamel('PARK ZERO WIN');

console.log(camelName1);
console.log(camelName2);

