//NUMBER REPRESENTS BOTH FLOATING AND INTEGER NUMBERS
let n = 19.123123
n = 1232;

alert(n / 0)//output is "Infinity"
alert( Infinity )//output is "Infinity"
alert( "any string" / 2 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;//Backticks: `Hello`.

//

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4>1;
alert(isGreater)

//let age = null;

let age;
alert (age)//undefined

let age2 = 100;

// change the value to undefined
age2 = undefined;

alert(age2); // "undefined"