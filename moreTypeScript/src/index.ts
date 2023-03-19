type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string}>

interface Backpack<Type> {
    add: (obj: Type) => void,
    get: () => Type;
} 

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);

interface Point {
    x: number,
    y: number
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

const point: Point = {x: 2, y: 5}
logPoint(point);

const point3 = {x:18 , y:26 , z:86}
logPoint(point3)

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

const color = { hex: "#FFFFFF"}

// logPoint(color)
/* 
  Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y 
*/

class virtualPoint {
    x: number;
    y: number;

    constructor(x:number, y: number) {
        this.x = x
        this.y = y
    }
}

const newVpoint = new virtualPoint(4, 56);
logPoint(newVpoint);

