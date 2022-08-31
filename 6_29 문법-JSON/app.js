
// 함수 X JSON은 객체이기 때문에 문자 | 배열 | 숫자 | 객체
const jsonString = `
  {
    "name": "박영승",
    "age": 25,
    "bloodType": "A"
  }
`;

try {
  const myJson = JSON.parse(jsonString);

  console.log(myJson.name);

  console.log(JSON.stringify(myJson));
} catch (e) {
  console.log('다시한번 시도해주세요.');
}