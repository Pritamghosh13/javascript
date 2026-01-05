const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "flash", "batman"]

marvel_heros.push(dc_heros)   //push the dc_heros to marvel_heros as an element.
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)  //marge the two array and make a new array.
console.log(allHeros);

const new_all_heros = [...marvel_heros, ...dc_heros]  //most efficinet way to add array, we can also add two or more array
console.log(new_all_heros);

const another_array = [1,2,3,[4,5],6,[7,[4,5]]]
console.log(another_array[5][1][0]);  //output : 4

const real_another_array = another_array.flat(Infinity)  
console.log(real_another_array);


console.log(Array.isArray("Pritam"))  //check whether this is array or not.
console.log(Array.from("Pritam"));  //make it an array.
console.log(Array.from({name : "Pritam"})); //gives an empty array as a output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







