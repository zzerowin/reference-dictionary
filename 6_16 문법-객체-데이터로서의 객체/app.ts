// 객체 문법
type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  color?: string;
  ['className']?: string;
}

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red'
};

function makeBox(width: number, height: number, borderRadius: number, backgroundColor: string): Box {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, 'blue');

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, 'blue');

box.borderRadius = 10;
console.log(box.borderRadius);

box['className'] = 'box rounded';
console.log(box['className']);

box.color = 'blue';
console.log(box.color);

const box1 = box;
const box2 = Object.assign({}, box);
const box4 = {...box, color: 'black'};
const box3 = JSON.parse(JSON.stringify(box));

console.log(box3);