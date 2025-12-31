const score = 400.9445
console.log(score);

console.log(score.toString());   //convert to string

console.log(score.toFixed(2));  //give to extra number after point

let otherNumber = 169.2884
console.log(otherNumber.toPrecision(4));

const value = 100000000
console.log(value.toLocaleString('en-IN'));



//************************Math*****************************************************

console.log(Math.abs(-4));   //convert negative number to positive
console.log(Math.round(4.5)); //round-off the number
console.log(Math.ceil(4.1));   //round-off towards the upper side
console.log(Math.floor(4.9));  //round-off towards the lower side
console.log(Math.max(2,5,7,8,9));  //find max
console.log(Math.min(2,5,7,8,9));  //find min


console.log(Math.random());    //gives random number between (0-1)
console.log((Math.random()*10) + 1);    //gives random number between (1-10)
console.log(Math.floor((Math.random()*10) + 1));  //give random round-off integer between (1-10)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));  //give random round-off integer between (min - max)







