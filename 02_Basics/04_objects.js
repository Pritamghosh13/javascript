//const tinderUser = new Object()  //singleton

const tinderUser = {}   //non-singletone object 

tinderUser.id = "123abc"
tinderUser.name = "Pritam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ghosh@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Pritam",
            lastname : "Ghosh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

Object.assign(obj1, obj2, obj3)    //add the all object together, stores in "obj1"
// console.log(obj1);

// const obj4 = Object.assign({}, obj1, obj2, obj3);  //add the all object together, stores in "obj4"
// console.log(obj4);

// console.log(obj1 === obj4); //gives output false. because the merge object stores in the "{}"

const obj5 = {...obj1, ...obj2, ...obj3} //most efficient process to add to merge two object
// console.log(obj5);

const users = [
    {
        id : 1,
        email : "ghosh@gmail.com"
    },

    {
        id : 1,
        email : "ghosh@gmail.com"
    },
    {
        id : 1,
        email : "ghosh@gmail.com"
    },
      {
        id : 1,
        email : "ghosh@gmail.com"
    }
]


// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //make a array of "keys" of the object
// console.log(Object.values(tinderUser));  //make a array of "Values" of the object
// console.log(Object.entries(tinderUser));  //make array of array , which stores the keys and values of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //search that the given data present or not, give output in boolean.


// console.log(Object.values(regularUser));  


const course = {
    coursename : "js" ,
    price : 999,
    courseInstractor: "Pritam Ghosh"
}

console.log(course.courseInstractor);


const {courseInstractor : Instractor} = course;  //Now we print the Instractor that print the object value of courseInstractor.
console.log(Instractor);
