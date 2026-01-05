//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Pritam",
    "full name" : "Pritam Ghosh",
    age : 19,
    location : "Nabadwip",
    email : "ghoshpritam0708@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday","sunday"],
    [mySym] : "myKey1"  //important, correct way to initilize symbol

}

console.log(jsUser.email);   //in this case email is taken as string automatically
console.log(jsUser["email"]);  //in this case, we write it as string.
console.log(jsUser["full name"]);


// //********symbol********

console.log(jsUser[mySym]);  
console.log(typeof jsUser[mySym]);  //determine the typeof value, that is string
console.log( typeof mySym);   //determine the typeof symbol directly.



jsUser.email = "ghoshpritam2006@gmail.com"  //the way to change a value out from the object

Object.freeze(jsUser)  //after this, we can not change the any value from object

jsUser.email = "ghoshpritam2006@google.com" //this change is not taken, because we freeze it.

console.log(jsUser);  //give output the all object



//**************************Functions****************************
jsUser.greeting = function(){
    console.log("Hello js user");   
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello js user, I am ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());



function greetUser(username){    //defining the function
    console.log(`hello ${username} !`);
}

greetUser("Pritam")  //calling the function


