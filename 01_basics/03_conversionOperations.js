let score = "Pritam"            //string convert to number

let scoreNumber = Number(score)
console.log(typeof scoreNumber)
console.log(scoreNumber);



let number = 14               //number convert to string

let stringNumber = String(number)
console.log(typeof stringNumber);
console.log(stringNumber);


let isLoggedIn = 1            //number to boolean

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let logged = "Pritam"                  //string convert to boolean

let booleanLogged = Boolean(logged)
console.log(typeof booleanLogged);
console.log(booleanLogged);


let loggedIn = ""                      //empty string to boolean

let booleanLoggedIn = Boolean(loggedIn)
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);



/*

number to string:
33 => "33"

string to number:
"33abc" =>NaN

boolean to number:
true => 1; false => 0

number to boolean:
1 => true; 0 => false

string to boolean:
"" => false   (Empty string)
"Pritam" => true (Normal string)

*/

