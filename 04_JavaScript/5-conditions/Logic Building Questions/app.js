// **************** CONDITIONAL OPERATORS *******************
// Q1: Write a JS program to find maximum between two numbers using JSonditional operator.
let num1 = 10;
let num2 = 20;
const max = num1 > num2 ? num1 : num2;
console.log(`${max} is largest nymber`);

// Q2: Write a JS program to find maximum between three numbers using conditional operator.
let num3 = 30;
const max2 = num1 >= num2 && num1 >= num3 ? num1 : num2 >= num3 ? num2 : num3;
console.log(`Largest number is:  ${max2}`);

// Q3: Write a JS program to check whether a number is even or odd using conditional operator.
const checkNumber =
  num1 % 2 === 0 ? "It is an even number" : "It is an odd number";
console.log(checkNumber);

// Q4: Write a JS program to check whether year is leap year or not using conditional operator.
let year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is leap year`);
} else {
  console.log(`${year} year is not a leap year`);
}

// *************** If Else statements ********************
// Q1: Write a JS program to check whether a number is negative, positive or zero.
if (num1 > 0) {
  console.log("It is a positive number");
} else if (num1 < 0) {
  console.log("It is a negative number");
} else {
  console.log("0 is neutral");
}

// Q2: Write a JS program to check whether a number is divisible by 5 and 11 or not.
if (num1 % 5 === 0 && num1 % 11 === 0) {
  console.log("Yes! it is divisible by 5 and 11");
} else {
  console.log("No! they are not divisible by 11 and 5");
}

// Q3: Write a JS program to input any alphabet and check whether it is vowel or consonant.
let alpha = "e";
if (
  alpha === "a" ||
  alpha === "e" ||
  alpha === "i" ||
  alpha === "o" ||
  alpha === "u"
) {
  console.log("yes it is a vowel");
} else {
  console.log("It is a consonant");
}

// Q4: Write a JS program to input any character and check whether it is alphabet, digit or special character.
let char = "a";
const charCode = char.charCodeAt(0);
if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
  console.log("The character is an alphabet.");
} else if (charCode >= 48 && charCode <= 57) {
  console.log("The character is a digit.");
} else {
  console.log("The character is a special character.");
}

// Q5: Write a JS program to check whether a character is uppercase or lowercase alphabet.
if (charCode >= 65 && charCode <= 90) {
  console.log("the character is uppercase");
} else if (charCode >= 97 && charCode <= 122) {
  console.log("the character is lowercase");
} else {
  console.log("It is not alphabet");
}

// Q6: Write a JS program to input week number and print week day.
let weekNumber = 4;
let weekday;
if (weekNumber < 1 || weekNumber > 7) {
  console.log("Invalid week number. Please enter a number between 1 and 7.");
} else if (weekNumber === 1) {
  weekday = "Sunday";
} else if (weekNumber === 2) {
  weekday = "Monday";
} else if (weekNumber === 3) {
  weekday = "Tuesday";
} else if (weekNumber === 4) {
  weekday = "Wednesday";
} else if (weekNumber === 5) {
  weekday = "Thursday";
} else if (weekNumber === 6) {
  weekday = "Friday";
} else if (weekNumber === 7) {
  weekday = "Saturday";
}

console.log(`Weekday for week number ${weekNumber} is ${weekday}.`);

// Q7: Write a JS program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade.

const PhyMarks = 18;
const ChemMarks = 14;
const BioMarks = 20;
const MathsMarks = 20;
const CompMarks = 20;
const totalMarksOfAllSubs = 100;
const totalObtainedMarks =
  PhyMarks + ChemMarks + BioMarks + MathsMarks + CompMarks;
let percentage = (totalObtainedMarks / totalMarksOfAllSubs) * 100;
if (percentage >= 80 && percentage <= 100) {
  console.log("Congratulation! You got grade A+");
} else if (percentage >= 70 && percentage <= 79) {
  console.log("Great! You got grade A");
} else if (percentage >= 60 && percentage <= 69) {
  console.log("Good! You got grade B");
} else if (percentage >= 50 && percentage <= 59) {
  console.log("Need Improvement! You got grade C");
} else if (percentage > 40 && percentage <= 49) {
  console.log("Please work hard for yourself! You got grade D");
} else if (percentage < 40) {
  console.log("Fail!");
}
