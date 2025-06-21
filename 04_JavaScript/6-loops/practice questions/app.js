// +++++++++++ PRACTICE QUESTIONS OF LOOPS +++++++++++++++++
// Q1: Write a JS program to print all natural numbers from 1 to n. – using while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Q2: Write a C program to print all natural numbers in reverse (from n to 1). – using while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Q3: Write a JS program to print all alphabets from a to z. – using while loop❗❗❗❗❗

// Q4: Write a JS program to print all even numbers between 1 to 100. – using while loop.
let num = 1;
while (num <= 100) {
  if (num % 2 === 0) {
    console.log(`even numbers from 1 to 100 is : ${num}`);
  }
  num++;
}

// Q5: Write a JS program to print all odd number between 1 to 100.
let num2 = 1;
while (num2 <= 100) {
  if (num2 % 2 !== 0) {
    console.log(`odd numbers from 1 to 100 is : ${num2}`);
  }
  num2++;
}

// Q6: Write a JS program to find sum of all natural numbers between 1 to n. ❗❗❗❗❗

// Q7: Write a JS program to find sum of all even numbers between 1 to n.

// Q8: Write a JS program to find sum of all odd numbers between 1 to n.


// Q9: Write a JS program to print multiplication table of any number.
let table = 2;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}

// Q10: Write a JS program to count number of digits in a number.

// Q11: 

for(let i = 1; i <= 5; i++){
    
    let pattern = " ".repeat(5 - i) + "💖".repeat(2 *i -1);
    console.log(pattern)
}

for (let i = 1; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} *  ${j} = ${i * j}`)
  }
}