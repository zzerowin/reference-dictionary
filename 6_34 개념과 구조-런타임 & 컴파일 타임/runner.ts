
function add(x: number, y: number): number {
  return x + y;
}

type ObjType = {
  x: number;
  y: number;
}

const json = `{"x": 10, "y": 20}`;
const obj: ObjType = JSON.parse(json) as ObjType;

add(obj.x, obj.y);

