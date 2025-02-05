let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let z = 1, y = 3;
alert( y - z ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"


alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4








//++++//
let a = 1, b = 1;

let c = ++a; // ? - 2 prefix sums
let d = b++; // ? - 1 postfix returns the old value

alert( a ); //- 2 incremented 
alert( b ); //-  2 incremented 

//===============================================//
let a = 2;

let x = 1 + (a *= 2);//- 5
//==============================================//

"" + 1 + 0//10 true
"" - 1 + 0//-1 false
true + false//1 true
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//NaN
"  -9  " + 5//" -9 5"
"  -9  " - 5//-14
null + 1//1
undefined + 1//NaN
" \t \n" - 2//-2

//=================================================//
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12