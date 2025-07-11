1)Debugging in UI (what ,why ,when)
 a)Breakpoints
 b)Enabling and disabling
 c)Deleting Breaking

2)React Hooks (why ,when ,what)
  a)useState
  b)useRef
  c)useEffect

3)JavaScript Higher order Methods
  a)map
  b)reduce
  c)filter

4)JavaScript Revision
  a)Array methods
  b)String methods
  c)let,var,const
  d)Temporal Deadzone
  c)Hoisting 



Boolean("false");
console.log(0.1 + 0.2 === 0.3);

let x = (function() {
  return typeof arguments;
})();
console.log(x);



const person = {
  name: "Alice",
  greet() {
    return `Hi, I’m ${this.name}`;
  },
};

const greet = person.greet;
console.log(greet());


let x = [1, 2, 3];
x.length = 0;
console.log(x);



let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);


console.log((function(x) {
  delete x;
  return x;
})(5));



let x = (() => arguments)(1, 2, 3);
console.log(x);


for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);


let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);


let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);


var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}



const obj = {
    first : 30,
    second : 20,
    first : 10
}

console.log(obj)



const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));  3 7 11



const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));



console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);


const str = "This is a test string with vowels";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let newStr = ""

for(let i = 0; i < str.length; i++ ){
    if(!vowels.includes(str[i])){
    newStr += str[i]
    }
}

console.log(newStr);



function add(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

// Example usage:
console.log(add(5, 7)); 



function isValidIPv4(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (isNaN(octet) || octet < 0 || octet > 255) return false;
    if (octet.length > 1 && octet[0] === "0") return false;
  }
  return true;
}

// Example usage:
console.log(isValidIPv4("192.168.0.1")); // Output: true
console.log(isValidIPv4("256.0.0.0")); // Output: false



function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

// Example usage:
console.log(toTitleCase("the quick brown fox")); //




unction getRandomColor() {
  const hexChars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Example usage:
console.log(getRandomColor()); // Output: e.g. '#3D5A89'




const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
console.log(companies);



console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.
Answer:
const getType = (val) => (val === null ? null : val?.constructor.name);




console.log(sum(4, 6, 8, 10).value); //output - 28
console.log(sum(4)(6)(8)(10).value); //output - 28
Answer

function sum(...args) {
  const ans = args.reduce((a, b) => a + b, 0); //just to get sum of all the array elements

  const myFunc = (num) => {
    return sum(num, ...args);
  };

  myFunc.value = ans;

  return myFunc;
}

console.log(sum(4, 6, 8, 10).value); //output - 28
console.log(sum(4)(6)(8)(10).value); //output - 28


const fruits = ["banana", "apple", "orange", "grape", "kiwi"];

// Task 1: Sort the array of fruits in alphabetical order (default behavior)
// Task 2: Sort the array of fruits in descending alphabetical order
// Task 3: Sort the array of fruits based on the length of the fruit names in ascending order
// Task 4: Sort the array of fruits in ascending order by the second character of each fruit name



* bugs in js
