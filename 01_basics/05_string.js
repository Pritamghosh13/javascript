const name = "Pritam "
let repocount = 50

console.log(name + repocount + " Value")   

//This is how we can write all string, with string variables.
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('pritamm')     //this process makes the string an object(heap), not an efficient process

console.log(gameName[0]);

let value = gameName.length
console.log(value);
console.log(gameName.toUpperCase());   //convert string to uppercase 
console.log(gameName.toLowerCase());   //convert string to lowercase

console.log(gameName.charAt(3));   //print the character of index 3
console.log(gameName.indexOf('m'));  //Print the index of given character


const newString = gameName.substring(0,4)   //substring(starting, up to limit)
console.log(newString);

const anotherString = gameName.slice(-8,3) //same like substring just can give here negative numnber
console.log(anotherString);      //means it start from backward

const newStringOne = "    pritam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pritam.com/pritam%20ghosh"

console.log(url.replace('%20','-'));   //replace(search,replace)
console.log(url.includes('ghosh'));

const newWord = "I am Pritam Ghosh" 

console.log(newWord.split(' '));     //this makes a array, split it basis of space,












