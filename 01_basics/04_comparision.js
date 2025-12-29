//normal comparision
console.log(2>1);    //true
console.log(2<1);   //false
console.log(2==1);   //false
console.log(1!=2);   //true


//comparion with string and number , in comaprision the string is convert to number.
console.log("2" > 1);
console.log("2" < 1);
console.log("2" == 2);    //loose equality, this is why it gives "true"
console.log("2" === 2);    //strict equality, this is why it gives "flase", also checked type.

console.log(2 >= "2");

//comparision with boolean and number, the boolean convert to number
console.log(true > 1);           //false
 console.log(false == 0);        //true

//comparion of NULL and Undified is very confusing, not prefer to use
