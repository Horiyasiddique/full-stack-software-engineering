// CONDITIONS
// Q1
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(`${num1} num1 is greater than ${num2} num2`);
} else {
  console.log(`${num2} num2 is greater than ${num1} num1`);
}

//Q2
let age = 20;
if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("Sorry! You are not eligible for driving");
}

//Q3
let price = 100;
if (price === 100) {
  console.log("100 rupe mile gy");
} else {
  console.log("🐐");
}

// Ladder
//Q4
let marks = 80;
if (marks >= 80 && marks <= 100) {
  console.log("Congratulation! You got grade A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("Great! You got grade A");
} else if (marks >= 60 && marks <= 69) {
  console.log("Good! You got grade B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Need Improvement! You got grade C");
} else if (marks > 40 && marks <= 49) {
  console.log("Please work hard for yourself! You got grade D");
} else if (marks < 40) {
  console.log("Fail!");
}

