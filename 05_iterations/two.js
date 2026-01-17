//for of loop

const arr = [1,2,3,4,5] 
for (const a of arr) {  //this is also applicable for string array, object array
    console.log(a);
}

const greeting = "hello world"
for (const greet of greeting) {  //this print all char with including spaces
    console.log(greet);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {  //printing keys and values of a map
    console.log(key,":-",value);   
}

for (const [key] of map) {  //printing only keys of a map
    console.log(key);
    
}

const obj = {
    game1 : "ludo",
    game2 : "snake_game",
    game3 : "FF"
}

for (const [key, value] of obj) {  //obj is not iterable.
    console.log(key, ":-", value);
}
