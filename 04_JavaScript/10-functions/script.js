// functions

function greetings(name) {
  console.log(`Hello ${name} How are you today ? `);
}

greetings("Hooriya");

//calculate sum of 2 numbers
function sum(num1, num2) {
  console.log(`sum of ${num1} and ${num2} is : ${num1 + num2}`);
}

sum(2, 3);
sum(67, 890);

//return
function invitation(guestName) {
  return `hello ${guestName} I have arranges a dinner and I would like you to join us on dinner`;
}

console.log(invitation("Aimal"));
console.log(invitation("Ahsan"));

//Arrow function (Lambda Functions)
const multiply = (a, b) => {
  return ` Product of ${a} and ${b} is : ${a * b}`;
};
console.log(multiply(6, 8));

//Practice set
//QUESTION 01
//Create a function which takes string as an argument and returns  the number of vowels in strings

function findVowels(str) {
  let count = 0;

  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(`there are ${count} vowels in the given string `);
}
findVowels("Hooriya");

//QUESTION 02
//Create an arrow function nd perform the same task

const countVowels = (word) => {
  let count = 0;
  for (const char of word) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(`there are ${count} vowels in the given string`);
};

countVowels("JavaScript");

//QUESTION 03
//for an array of given numbers print the square of each value using the for each loop

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((val) => {
  console.log(`square of ${val} is : ${val ** 2}`);
});

//Some More Array Methods

//MAP METHOD
//for an array of given numbers print the cube of each value using the map method

array.map((val) => {
  console.log(`cube of ${val} is ${val ** 3}`);
});

//FILTER METHOD

let evenNumbs = array.filter((val) => {
  return val % 2 == 0;
});

console.log(evenNumbs);

//REDUCE METHOD
//adding each element of an array
const sumOfArray = array.reduce((previous, current) => {
  return previous + current;
});

console.log(sumOfArray);

//finding largest element of an array

const largestNum = array.reduce((previous, current) => {
  return previous > current ? previous : current;
});

console.log(largestNum);

//Functions with array
function getSecondElement(array) {
  return array[1];
}

console.log(getSecondElement([200, 300, 6700]));

//Functions with Objects
function books(bookInfo) {
  return `Book name is ${bookInfo.name} and the author is ${bookInfo.author}`;
}

console.log(books({ name: "Atomic Habits", author: "James Clear" }));

//Practice set
//QUESTION 01
//we are giving array of marks of students.Filtered out the marks of student that scored 90+
let marks = [80, 67, 33, 87, 23, 56, 94, 98, 34];
const ninetyPlusMarks = marks.filter((val) => {
  return 90 < val;
});

console.log(ninetyPlusMarks);

//QUESTION 02
//take a number n as an input from user create an array of numbers from 1 to n

let n = prompt("enter a number:");
let number = [];
for (let i = 1; i <= n; i++) {
  number[i - 1] = i;
}
console.log(number);

//use the reduce method to calculate sum of all numbers

let addition = number.reduce((result, current) => {
  return result + current;
});
console.log(`ADDITION: ${addition}`);

//use the reduce method to calculate product of all numbers

let multiplication = number.reduce((previous, current) => {
  return previous * current;
});
console.log(`MULTIPLICATION: ${multiplication}`);

function sum(num1, num2) {
  console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
}

sum(10, 2);

//**********************Immediately Invoked Function Expression [IIFe]**********************
//++++++++++++++++INTERVIEW QUESTIONS++++++++++++++++++++++++
//Q: WHY WE USE IIFE ? To avoid global variables pollution and to invoked in immediately
// just wrap your function in () and call it on the same line
(function intro() {
  console.log("I am horiya");
})();

//!!!!!!!!!!!!!!semicolon ; after calling IIFE is necessary to write 2 IIFE in one file ; is necesary
((PL) => {
  console.log(
    `which is your favorite programming language ? my favorite language is ${PL}`
  );
})("JavaScript");
