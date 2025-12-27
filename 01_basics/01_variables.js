const accountId = 12254        //never changes after the one time assigning
let accountPassword = "123"    //can change after assigning in code
var accountCity = "Kolkata"



/*
prefer not to use "var" as a veriable, always use "let"
*/

accountPassword = "52"
accountCity = "jaipur"

console.log(accountId);    //print specific item 

console.table([accountId, accountPassword, accountCity])   //print value in order in a table