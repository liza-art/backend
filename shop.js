"use strict";

const products = [
  { id: 1, name: "Laptop Stand", price: 29.99, stock: 15, category: "office", tags: ["metal", "adjustable"] },
  { id: 2, name: "USB-C Cable", price: 9.5, stock: 120, category: "electronics", tags: ["cable", "fast-charge"] },
  { id: 3, name: "Mechanical Keyboard", price: 89, stock: 0, category: "electronics", tags: ["rgb", "wired"] },
  { id: 4, name: "Notebook A5", price: 4.2, stock: 300, category: "office", tags: ["paper"] },
  { id: 5, name: "Desk Lamp", price: 24.75, stock: 8, category: "home", tags: ["led", "dimmable"] },
  { id: 6, name: "Wireless Mouse", price: 19.99, stock: 42, category: "electronics", tags: ["wireless"] },
  { id: 7, name: "Water Bottle", price: 12, stock: 60, category: "home", tags: [] },
  { id: 8, name: "Monitor 27", price: 249.9, stock: 5, category: "electronics", tags: ["4k", "ips"] },
];

//part 1: values, types, coercion

const str = "Hello";
const num = 10;
const isReady = false;
// x -  undefined;
let x;
const value = null;
const bigNum = BigInt(232432423453231354757);


console.log(typeof str);
console.log(typeof num);
console.log(typeof isReady);
console.log(typeof x);
console.log(typeof value);
console.log(typeof bigNum);
console.log(( [] , typeof ([] - [])));
console.log("\n\n\n")

console.log("Prediction");
console.log("5" + 3);
// + operator converts left side to the right, so in the end we have 53

console.log([] - [], "line 38");
// array is the object type, so we will have object object
//now I tried and we have nothing 
//why????

console.log(0.1 + 0.2);
// we will have 0.3 because we add one number to another

console.log("5" - 3);
//we will have 2,  because string will be converted to number


console.log([] + {});
// why, but we have [object Object]


console.log(0.1 + 0.2 === 0.3);
//first we will have 0.3 and then the result of comparison - false

console.log(null + 1);
// null is falsy, so + operator will convert it to 0, 1
 
console.log(true + 1);
//we will have 2, cuz' true will be 1

console.log(undefined + 1);
// we will have NaN

console.log("b" + "a" ++ "a" + "a");
// we have invalid expression