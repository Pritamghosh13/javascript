const myobj = {
    js : "javascript",
    cpp: "c++",
    rb : "ruby",
    swift : "Swift by apple"
};

 
//for objects we use (for in) loop
//for map we use (for of) loop

//forin loop
for (const key in myobj) {
    // console.log(key);  
    
    // console.log(`${key} is shortcut for ${myobj[key]}`);
    
}

const programming = ["js", "cpp", "java", "python"]

for (const key in programming) {
    // console.log(key);   //it prints the keys of the array
    
    // console.log(programming[key]); //prints the values
}


//for each loop
const coding = ["js", "python", "cpp"]

coding.forEach( function (item){
//    console.log(item);
    
})


function printme(item){
    // console.log(item);
}

coding.forEach(printme)  //we have to give the reference of printme, not printme()

coding.forEach((item, index, arr)=>{  //we acess all of this like index, value and full array
// console.log(item, index, arr);
})

//ARRAY THAT CONTAINS OBJECTS.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
       
    },
    {
        languageName: "java",
        languageFileName: "java"
       
    },
    {
        languageName: "python",
        languageFileName: "python"
       
    },

]
//WE USE ARROW FUNCTION IN (FOR EACH) LOOP.
myCoding.forEach( (item)=>{
    // console.log(item.languageName);
})


//*****************************************(forEach)*********************************


//FOR EACH FUNCTION DON'T RETURN ANYTHING, FOR THIS WE USE FILTER FUNCTION
 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums) => nums>4)
// console.log(newNums);

//if we open scope, we have to write return function manually.
const newNums1 = myNums.filter((nums) =>{
   return nums > 4
})
// console.log(newNums1);


//without returning, we can use (for each) like this.
const numarray = []

myNums.forEach((num) =>{
    if (num>4){
        numarray.push(num)
    }
})
// console.log(numarray);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const MyBooks = books.filter((bk) => bk.genre === "History")   //using filter for making conditional loop in array of multiple objects.
//   console.log(MyBooks);

  const newBook = books.filter((pr) => {
    return pr.publish>1989 && pr.genre === "History"})
  console.log(newBook);
  
  


