// File: dataTypesExamples.ts

// Primitive Data Types
let age: number = 25;
let name: string = "John Doe";
let isStudent: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
const sym: symbol = Symbol("key");

// Non-Primitive (Complex) Data Types
let numbers: number[] = [1, 2, 3, 4, 5];
let person: { name: string, age: number } = { name: "Alice", age: 30 };
let greet: Function = () => {
    console.log("Hello, world!");
};
let today: Date = new Date();
let dynamicValue: any = 10;
dynamicValue = "Hello";

// You can add comments to explain each section or type if needed.

// Testing the code
console.log(age);
console.log(name);
console.log(isStudent);
console.log(nullValue);
console.log(undefinedValue);
console.log(sym);

console.log(numbers);
console.log(person);
greet();
console.log(today);
console.log(dynamicValue);

// Declare a tuple
let person: [string, number, boolean];

// Initialize the tuple
person = ["Alice", 30, true];

// Accessing elements in the tuple
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true

// Invalid operation - accessing beyond tuple length will throw an error
// console.log(person[3]); // Error: Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.

// Updating tuple elements
person[0] = "Bob";
person[1] = 25;

// Validating a tuple structure
let employee: [string, number];

// This will throw an error because the tuple structure doesn't match
// employee = ["John", 28, true]; // Error: Type 'boolean' is not assignable to type 'undefined'.





#git checkout -b module-1
#git push origin module-1
#git add .
#git commit -m "Your commit message here"
#git push origin module-1
