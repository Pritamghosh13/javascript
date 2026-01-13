//Immediately Invoked Function Expressions (IIFE)
//used for imediately call the function,

(function chai() {  //named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name)=>{  //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Pritam")



var score = 100; // This is now global and can be broken by any other script.

(function() {
    var score = 100; // This is "private" to this function, we can't acess from the outside of this scope
    console.log("Current score is: " + score);
})();

console.log(score); // Error: score is not defined