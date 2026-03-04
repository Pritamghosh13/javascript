// const user = {
//     username: "Pritam",
//     password: "P121",
//     loggedInCount:8,

//     getUserDetails: function(){
//         console.log(`Username = ${this.username}`);
//         console.log(this);  //gives current context.
//     }
// }
// // console.log(user.username);
// user.getUserDetails()
// console.log(this);  //gives empty object.
 

function user(username, logInCount, IsLoggedIn){
  this.username = username  //"this" keyword bind the value with empty object, made by "new" keyword
  this.logInCount = logInCount
  this.IsLoggedIn = IsLoggedIn

  this.greetings = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this
}

const userOne = new user("Pritam", 5, true) //"new" keyword make a empty object.
const userTwo = new user("Lalu", 4, false)
console.log(userOne);
// console.log(userOne.constructor);
console.log(userTwo);


