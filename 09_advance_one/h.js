const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, crytography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log('task completed');
})

//******************************************************************

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log('async task 2 is completed');
    resolve()
    },2000)
    
}).then(function(){
    console.log('task 2 is completed');
})
//*****************************************************************

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"pritam", email: "ghoshpritam0708@gmail.com"})
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})

//*******************************************************************

