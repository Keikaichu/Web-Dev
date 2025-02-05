let i = 3;

while (i) {
  alert( i-- );
}// last to be alerted is 1

// Every loop iteration decreases i by 1. The check while(i) stops the loop when i = 0.

// Hence, the steps of the loop form the following sequence (“loop unrolled”):



//Which values does the while loop show?
let i = 0;
while (++i < 5) alert( i );//prefix ++i first increments i and then returns the new value. last is 4


let i = 0;
while (i++ < 5) alert( i );//postfix i++ increments i and then returns the old value. last is 5


//Which values get shown by the "for" loop?

for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );
//answer: from 0 to 4 in both cases 
//Execute once i = 0 before everything (begin).
// Check the condition i < 5
// If true – execute the loop body alert(i), and then i++
// The increment i++ is separated from the condition check (2). That’s just another statement.

// The value returned by the increment is not used here, so there’s no difference between i++ and ++i.



//Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }



  //Replace "for" with "while"
  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }






//Repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


//Output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}