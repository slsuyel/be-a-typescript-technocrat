# TypeScript Data Types Examples

This repository contains TypeScript code examples demonstrating different data types and usage, including both primitive and non-primitive data types, along with a specific focus on tuples.

## File: `dataTypesExamples.ts`

### Data Types Used

#### Primitive Data Types

- `number`: Represents numeric values. Example: `let age: number = 25;`
- `string`: Represents textual data. Example: `let name: string = "John Doe";`
- `boolean`: Represents a boolean value (true/false). Example: `let isStudent: boolean = true;`
- `null`: Represents an intentional absence of any object value. Example: `let nullValue: null = null;`
- `undefined`: Represents a variable that has been declared but not assigned a value. Example: `let undefinedValue: undefined = undefined;`
- `symbol`: Represents unique and immutable data. Example: `const sym: symbol = Symbol("key");`

#### Non-Primitive (Complex) Data Types

- `number[]`: Represents an array of numbers. Example: `let numbers: number[] = [1, 2, 3, 4, 5];`
- Object types like `{ name: string, age: number }`, functions, dates, and `any` type are also demonstrated.

### Code Execution

The code demonstrates the initialization and usage of these data types through console.log statements.

### Tuples in TypeScript

#### Declaring a Tuple

A tuple is a fixed-size collection that can hold elements of different types. Example:

```typescript
let person: [string, number, boolean];
Save to grepper
Initializing a Tuple
Tuples can be initialized with values adhering to their structure.

- `Example:

person = ["Alice", 30, true];
Save to grepper
Accessing Elements in a Tuple
Elements within a tuple can be accessed by their index. Example:


console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true
Save to grepper
Updating Tuple Elements
Tuple elements can be updated individually by index. Example:


person[0] = "Bob";
person[1] = 25;
Save to grepper
Validating Tuple Structure
Assigning values that do not match the tuple's structure will result in a TypeScript error. Example:


let employee: [string, number];
// This will throw an error because the tuple structure doesn't match
// employee = ["John", 28, true];
// Error: Type 'boolean' is not assignable to type 'undefined'


#git checkout -b module-1
#git push origin module-1
#git add .
#git commit -m "Your commit message here"
#git push origin module-1
