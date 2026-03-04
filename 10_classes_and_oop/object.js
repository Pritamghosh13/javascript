function multipleBy5(num){
    return num*5
}
console.log(multipleBy5(4))


function cretaeUser(username, price){
    this.username = username
    this.price = price
}

cretaeUser.prototype.increment = function(){
    this.price++
}
cretaeUser.prototype.printMe = function(){
    console.log(`Price = ${this.price}`);
    
}

const chai = new cretaeUser("chai", 25)
const tea = new cretaeUser("tea", 250)
chai.printMe()
tea.increment()
tea.printMe()


//*************************************************************************


let myheros = ["thor", "Ironman", "loki"]  //array

let heroPower = {  //object
    thor : "Hammer",
    spiderman : "Sling",
    ironman : "Mark52",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.pritam = function(){
    console.log(`This prototype is present in object`)
}

heroPower.pritam();
myheros.pritam()
console.log(Object.prototype);

Array.prototype.heyPritam = function(){
    console.log(`This prototype present in array`);
}

myheros.heyPritam()  //this is works
// heroPower.heyPritam() //this is not works



//*****************************************************************************************


const user = {
    name : "Pritam",
    email : "ghosh@gmail.com"
}

const teacher = {
    makeVideo : true
}


//old syntax
teacher.__proto__ = user;  //joins "user" object with "teacher" object

//modern syntax
Object.setPrototypeOf(teacher, user)  //joins "user" object with "teacher" object

console.log(teacher.name);


//****************************************************************************************

let anotherUserName = "chaiAurCode       "

String.prototype.realLength = function(){
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.realLength()
"Pritam     ".realLength()

