const user = {
    username :"Pritam",
    price : 999,
    welcomeMessage: function(username){
        console.log(`${this.username} , welcome to the website` );
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "Happy"  //change the username in the object
user.welcomeMessage()   //calling the function

console.log(this);  //this gives empty object as a output

function chai(){
    console.log(this); 
}
chai()

function me(){
    let username = "Pritam"
    console.log(this.username);  //gives undefined as output, because "this" is not worked in object not in function
}
me()
 

//************************************Arrow_function**************************************


const addTwo = (num1,num2) => {  //explicit function, always write the return function
    return num1 + num2
}
console.log(addTwo(3,4));

const addThree = (num1, num2, num3) => (num1 + num2 + num3)  //implicit function, don't have to write the return function
console.log(addThree(1,6,5));

const obj = () => ({username : "Pritam Ghosh"})
console.log(obj());


