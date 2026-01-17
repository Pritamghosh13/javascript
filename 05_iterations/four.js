const myNUmbers = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNUmbers.map((num) => num + 10 )
// console.log(newNums);

//CHAINING OF MAP
newNums = myNUmbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num)=> num>=40)  //if we use map in comparison, it gives true or false.

    // console.log(newNums);


//using noemal function
const myTotal = myNUmbers.reduce(function(acc, current) {
    // console.log(`acc : ${acc} and currentValue : ${current}`);
    return acc + current
}, 0)
// console.log(myTotal);

const myTotal1 = myNUmbers.reduce((acc, current) => acc + current,  0)
// console.log(myTotal1);


//adding all numbers of array using (for of) loop.
let sum = 0;
for (const int of myNUmbers) {
    sum += int
}
// console.log(sum);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay);
 