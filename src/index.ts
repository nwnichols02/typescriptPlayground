console.log('hello world');

let age: number = 20;
if (age < 50) 
    age +=10;
console.log(age)

let sales= 123_456_789;
let course = 'TypeScript';
let is_published= true;
let level;

function render(document: any) {
    console.log(document)

}
//JavaScript
// let numbers = [1, 2, '3'];
//TSC
let numbers: number[] = [1, 2, 3]
numbers.forEach(n => n.toString())

let user: [number, string] = [1, 'Nate']
user.push(1);

// const small = 1 
// const medium = 2 
// const large = 3

//PascalCase
const enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium

console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: '', 
    retire: (date: Date) => {
        console.log(date)
}};
employee.name = 'Nate';

function kgToLbs(weight: number | string) {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10)
kgToLbs('10kg');


// function kgToLbs(weight: number & string) {
    type Draggable = {
        drag: () => void
    };

    type Resizable = {
        resize: () => void
    };

    type UIWidget = Draggable & Resizable;

    let textBox : UIWidget = {
        drag: () => {},
        resize: () => {}
    }

//Lilveral (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'in'

function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase())
    } else {
        console.log('Hola!')
    }
}

greet(null);

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday : new Date()}
}

let customer = getCustomer(1);
// OPtional property access operator
console.log(customer?.birthday?.getFullYear())

//Optional element access operator
//if(customer !==null || undefinded)
// customers?.[0]

//Optional call
let log: any = null;
log?.('a');
