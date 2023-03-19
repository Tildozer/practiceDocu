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
// function render(document: any) {
// }

let user: [number, string] = [1, 'Mosh'];
// .push() is one of typscripts aachilles heel
// user.push(1);
// const small: number = 0;
// const medium: number = 1;
// const large: number = 2;
// enum size { small, medium, large}

const enum size { small=24, medium, large}

let mySize: size = size.medium

function calculateTax(income: number, taxYear = 2022): number{
    if(taxYear < 2022){
      return income * 1.2;
    } else {
      return income * 1.3;
    }
}

calculateTax(506, 2)
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//       console.log(date);
//     } 
// };
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
      console.log(date);
    } 
};

function kgToLbs(weight: number | string): number{
  if(typeof weight === "number"){
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2
  }
}

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
}
type Quantity = 50 | 100
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

function greet(name: string | null | undefined){
  if(name){
      console.log(name.toUpperCase());
  } else {
    console.log("hola")
  }
}

greet(null)

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0)
// Optional property acess operator
  console.log(customer?.birthday?.getFullYear())

// Optional element access operator
//  customers?.[0]
  //  if(customer !== null && customer !== undefined){
  //  customer[0]
  // }
// Optional call
 let log: any = null;
 log?.("a")

 
// any - only do if you need to but not recomended.
// unknown -
// never -
// enum -
// tuple -
// advanced types

