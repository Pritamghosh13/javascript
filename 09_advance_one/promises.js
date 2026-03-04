const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");   
        resolve()    
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//*************************************************************************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
    
})

//********************************************************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Pritam", email: "ghoshpritam0708@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//************************************************************************ 

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({username: "hello", email : "hello@gmail.com"})
       }
       else{
        reject("ERROR, Something went wrong")
       }
    },1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error)=>{
    console.log(error);  
}).finally(()=>{
    console.log("The promise either resolved or rejected");
    
})


//*********************************************************************


const promiseFIve = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = true;
       if(!error){
        resolve({username: "javascript", password :"123"})
       }
       else{
        reject("ERROR, Something went wrong")
       }
    },1000)
});

async function consumedPromiseFive() {
    try {
        const response = await promiseFIve
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}
consumedPromiseFive()

************************************************************* ******************

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


//****************************************************************************************

fetch('https://api.github.com/users/hiteshchoudhary')
.then((Response) => {     //this "then" first execute then the next "then" is executed
    return Response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})


// const promiseSix = new Promise(function(resolve, reject){
//     let error = false;
//        if(!error){
//         resolve({username: "javascript", password :"123"})
//        }
//        else{
//         reject("ERROR, Something went wrong")
//     }
// }).then(function(user){
//     console.log(user);
//     console.log(typeof user);   //object
    
//     return user.username   //return to next then function.
// })
// .then((username)=>{
//     console.log(username);
//     console.log(typeof username);   //string
    
// })
// .catch(function(){
//     console.log("ERROR: Somthing went wrong");
    
// })

