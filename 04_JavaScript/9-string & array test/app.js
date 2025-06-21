// ++++++++++++++++++ strigs coding based questions test ++++++++++++++++++

// 1️⃣ What does "hello".toUpperCase() return?
// it will return "HELLO"
let str = "hello";
console.log(str.toUpperCase());

// 2️⃣ How can you convert "WORLD" to lowercase in JS?
let str2 = "WORLD";
console.log(str2.toLowerCase());

// 3️⃣ What will "JavaScript".charAt(4) return?
//it will return "S"
let JS = "JavaScript";
console.log(JS.charAt(4));

// 4️⃣ How do you find the index of 'a' in "banana"?
let fruit = "banana";
console.log(fruit.indexOf("a"));

// 5️⃣ What does "   spaced   ".trim() return?
//it will return "spaced"
let str3 = "        spaced      ";
console.log(str3.trim());

// 6️⃣ How to replace "I like JS" with "I love JS"?
let str4 = "I like JS";
console.log(str4.replace("like", "Love 💖"));

// 7️⃣ What is the output of "hello".slice(1, 4)?
//it will return "ell"
let str5 = "hello";
console.log(str5.slice(1, 4));

// 8️⃣ How to check if "React" includes "act"?
let str6 = "React";
console.log(str6.includes("act"));

// 9️⃣ What is the result of "frontend".substring(0, 5)?
//the result is : "front"
let str7 = "frontend";
console.log(str7.substring(0, 5));

// 🔟 How do you split "a,b,c" into an array?
let str8 = "abc";
console.log(str8.split([]));

// 1️⃣1️⃣ How can you repeat the string "ha" 3 times?
let str9 = "ha";
console.log(str9.repeat(3));

// 1️⃣2️⃣ What will "Hello".startsWith("He") return?
let str10 = "Hello";
console.log(str10.startsWith("He"));

// 1️⃣3️⃣ What does "JavaScript".endsWith("pt") give?
let str11 = "JavaScript";
console.log(str11.endsWith("pt"));

// 1️⃣4️⃣ How to pad "7" to "007" using padStart()?
let str12 = "7";
console.log(str12.padStart(3, "0"));

// 1️⃣5️⃣ What is the result of "abc".concat("123")?
let str13 = "abc";
let str14 = "123";
console.log(str13.concat(str14));

// ++++++++++++++++++++  Array coding based questions test ++++++++++++++++++++

// 1️⃣ What does [1, 2, 3].push(4) return?
// it will return [1,2,3,4]
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// 2️⃣ What is the output of [1, 2, 3].pop()?
//the output will be [1,2]
arr.pop();
console.log(arr);

// 3️⃣ How to remove the first element from [10, 20, 30]?
let arr2 = [10, 20, 30];
arr2.shift();
console.log(arr2);

// 4️⃣ What does [1, 2, 3].shift() do?
// it will remove first element of an array
arr.shift();
console.log(arr);

// 5️⃣ How can you add 0 at the beginning of [1, 2, 3]?
arr.unshift(0);
console.log(arr);

// 6️⃣ What is the result of [1, 2].concat([3, 4])?
let arr3 = [1, 2];
let arr4 = [3, 4];
console.log(arr3.concat(arr4));

// 7️⃣ How do you reverse [1, 2, 3]?
let arr5 = [1, 2, 3];
console.log(arr5.reverse());

// 8️⃣ What will [3, 1, 4, 2].sort() return?
let arr6 = [3, 1, 4, 2];
console.log(arr6.sort((a, b) => a - b));

// 9️⃣ How to join ['a', 'b', 'c'] into "a-b-c"?
let strArr = ["a", "b", "c"];
console.log(strArr.join("-"));

// 🔟 What does ['x', 'y', 'z'].indexOf('y') return?
// it will return 1
let strArr2 = ["x", "y", "z"];
console.log(strArr2.indexOf("y"));

// 1️⃣1️⃣ What’s the output of [1, 2, 3].includes(2)?
// true
let arr7 = [1, 2, 3];
console.log(arr7.includes(2));

// 1️⃣2️⃣ What does [1, 2, 3, 4].slice(1, 3) return?
// [2,3]
let arr8 = [1, 2, 3, 4];
console.log(arr8.slice(1, 3));

// 1️⃣3️⃣ How to remove 2 elements from [10, 20, 30, 40] starting at index 1?
let arr9 = [10, 20, 30, 40];
arr9.splice(1, 2);
console.log(arr9);

// 1️⃣4️⃣ What is the result of [1, 2, 3].map(x => x * 2)?
let arr10 = [1, 2, 3];
arr10.map((item) => {
  console.log(item * 2);
});

// 1️⃣5️⃣ What will [1, 2, 3].filter(x => x > 1) return?
arr10.filter((item) => console.log(item > 1));
