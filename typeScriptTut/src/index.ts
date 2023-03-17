console.log("hello World")

let age: number = 20;
if(age < 50){
  age += 10;
}

let sale: number = 123_456_789;

let course: string = "TypeScript";

let is_published: boolean = true;

let number: number[] = [1, 2, 3];

number.forEach(n => n.toFixed(0))

let string: string;
// kinda make typescript useless
function render(document: any) {
}

let user: [number, string] = [1, 'Mosh'];
// .push() is one of typscripts aachilles heel
// user.push(1);
// const small: number = 0;
// const medium: number = 1;
// const large: number = 2;
// enum size { small, medium, large}

const enum size { small=24, medium, large}

let mySize: size = size.medium


// any - only do if you need to but not recomended.
// unknown -
// never -
// enum -
// tuple -