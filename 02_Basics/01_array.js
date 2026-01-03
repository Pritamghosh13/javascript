const num = [1,2,3,4,5]  //number array
const myHeros = ["IronMan", "Thor", "CaptainAmarica"]  //string array
const num2 = [1,2,true,"Pritam"]  //mix type of aray(number, boolean, string)

console.table([num[1],myHeros[1],num2[2]])

const myArr = new Array(1,2,3,4)  //another way to initialize an array



//***************************Array Methods*******************************************


myArr.push(6)   //add 6 in the last of the array 
myArr.push(7)

console.log(myArr); //print the whole array

myArr.pop();  //remove last element of the array.
console.log(myArr);

myArr.unshift(9)  //add 9 to the first in the array
console.log(myArr);

myArr.shift()   //remove first element from the array
console.log(myArr);

console.log(myArr.includes(9)); //search the element through the array, and give answer in boolean
console.log(myArr.indexOf(9)); // give the index number of given number. if their is not present then give output (-1)

console.log(myArr);
console.log(typeof myArr);  



const newArr = myArr.join() //convert the array into string values
console.log(newArr);
console.log(typeof newArr);  //string



//******************************slice, splice**************************************


console.log("A",myArr);

//using slice
const myn1 = myArr.slice(1,3)  //slice(starting, up to range)
console.log("After slice: ",myn1);

console.log("B", myArr);   //main array after using slice

//using splice
const myn2 = myArr.splice(1,3)  //splice(starting, to the range)
console.log("After splice: ",myn2);

console.log("C", myArr);  //main array after the splice


//slice => not change the main array. starting to up to the range.
//splice => change the main array. starting to at the range.




