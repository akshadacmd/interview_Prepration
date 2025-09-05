//Q1 Write an array with elements
let arr = ["Akshada", "second"];
console.log(arr);

//Q2 Check if second string is a substring of first string

function isSubstring(arr) {
  let [first, second] = arr;
  return first.includes(second);
}

console.log(isSubstring(["Akshada", "sha"])); // true
console.log(isSubstring(["Akshada", "xyz"])); // false

//Q3 Which array methods have you used
//ans : map, filter, reduce, every, find, substring

//Q4 Difference between find() and every() 


let nums = [1, 2, 3, 4, 5];

let found = nums.find(n => n % 2 === 0);
console.log(found); // 2 (first even)

let allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // false


//Q5 What does shift() and unshift() do

let a = [10, 20, 30];

a.unshift(50); // add to start
console.log(a); // [5, 10, 20, 30]

a.shift(); // remove from start
console.log(a); // [10, 20, 30]


//Q6 Write Fibonacci series

function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

//Q7 Array of objects – get objects with age < 24

let people = [
  { name: "Akshada", age: 22 },
  { name: "Rahul", age: 27 },
  { name: "Amit", age: 23 }
];

let result = people.filter(p => p.age < 24);
console.log(result);
// [{name: "Akshada", age: 22}, {name: "Amit", age: 23}]


//Q8 Difference between call, apply, bind
let person = { name: "Akshada" };

function greet(greeting, age) {
  console.log(`${greeting}, I am ${this.name}, age ${age}`);
}

greet.call(person, "Hello", 22);        // Hello, I am Akshada, age 22
greet.apply(person, ["Hi", 23]);        // Hi, I am Akshada, age 23

let boundFn = greet.bind(person, "Hey");
boundFn(24);   