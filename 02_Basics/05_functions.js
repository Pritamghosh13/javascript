function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("a");
    console.log("m");
    
}

sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,7);

function addTwoNumberss(number1, number2){
    const result = number1 + number2
    return result
    console.log("Pritam"); 
}

const result = addTwoNumberss(3,4 );
console.log(result);

function loginUserMessage(username = "you"){  //the "you" print when their is no value of username
    if(username === undefined){  //when we don't pass any username.
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pritam"))  //if we don't pass any username then output will be username

function calculateCart(...num1){  //rest operator, make a array of the passing value.
    return num1
}
console.log(calculateCart(100,200,400,2000))   


function calculateCart(val1, val2, ...num1){  //rest operator, make a array of the passing value.
    return num1
}
console.log(calculateCart(100,200,400,2000))    //output: val1 = 100, val2 = 200, [400, 2000]

const user = {
    username : "Pritam Ghosh",
    password : "123abc"
}

function printobj(anyobject){
    return `username : ${anyobject.username} , password : ${anyobject.password}`
}

console.log(user)

const newArray = [200,400,500]

function arrayfunction(anyarray){
    return anyarray[1]
}

console.log(arrayfunction(newArray))



