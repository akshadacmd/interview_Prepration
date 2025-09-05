//Q1  How do you access a character from a particular index in JavaScript 
// ans :Using the charAt() method

//Q2 What is the difference between undeclared and undefined variables 
//ans : Undefined: Variable is declared but no value is assigned,Undeclared: Variable is used without being declared, which throws a ReferenceError


//Q3 If you write a = 100; is this an undefined variable
//ans : No, because a value is assigned


//Q4 What are different ways to create/construct an object in JavaScript
// ans : Object literal,Object constructor,Function constructor,Using Object.create() / destructuring,Using Object.assign()

//Q5 What is the difference between shallow copy and deep copy
//ans : Deep copy: Creates a copy of the object with separate memory (does not share reference).Shallow copy: Creates a new object/array but still shares references to nested objects.


//Q6 Can shallow copy and deep copy be done for arrays
// ans :Yes, using destructuring for shallow copy. For deep copy, not clearly explained.


//Q7 What is the output and why

console.log(100 + "8" + 20)//"100820" (string) Because 100 + "8" → "1008" (string concatenation), then "1008" + 20 → "100820"


//Q8 What if we use minus (-) instead of plus (+) in the above case
console.log(100 - "8" - 20)//72 Because subtraction forces numeric conversion

//Q9  What are the different looping structures in JavaScript
//ans :for loop,while loop,for...in / for...of


//Q10 What is the output of
let abc = 100;
if(function xyz(){}) {
   abc = abc - typeof(xyz);
}
console.log(abc);//NaN

//Q11 What is the difference between slice() and splice() methods in arrays
//ans : slice() → Immutable (extracts values without modifying the original array).
    // splice() → Mutable (can add/remove/replace elements in the original array).


//Q12 Why do we use includes() method
//strings example
  let str = "ABC";
console.log(str.includes("B"));  // true  In strings: Checks if a substring exists.

// Array example
let arr = ["a", "b", "c"];
console.log(arr.includes("b"));  // true  In arrays: Checks if a value exists.



//Q13 Have you used find() and findIndex() methods?

//Ans: find(): Yes, used. It returns the first occurrence of the element.

      //findIndex():  returns the index of the first element that matches.

