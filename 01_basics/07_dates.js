//let myDate = new Date();
// console.log(myDate);    //output: 2026-01-03T15:41:30.063Z

// console.log(myDate.toString());  //output: Sat Jan 03 2026 21:08:34 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); //output: Sat Jan 03 2026

// console.log(myDate.toLocaleString());  //output: 3/1/2026, 9:08:34 pm

// console.log(myDate.toLocaleDateString());  //output: 3/1/2026

// console.log(myDate.toLocaleTimeString());  //output: 9:08:34 pm


// let myCreatedDate1 = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());  //output: Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());  //output: 23/1/2023, 5:03:00 am

// let mycreatedDate3 = new Date(2025,0,15)  //output : Wed Jan 15 2025
// console.log(mycreatedDate3.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //give output in mili-seconds from 1 jan 1970
// console.log(myCreatedDate2.getTime());  //give output in mili-seconds

// console.log(Math.floor((Date.now())/1000));  //give output in seconds


let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() +1 );  //month index starts from zero.


newDate.toLocaleString('defalut',{
    weekday: "long"
})
console.log(newDate.weekday());

