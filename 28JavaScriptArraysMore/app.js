const array1=["a","Bini","Sofi","Meru","Temie",8,23,]
const array2=[1,8,32,2,67,0,17,9,66,91,56,10,-8,71,]
let num;
console.log(array1)
console.log(array2)
// To check the existence of an item in an array, we use .indexOf(item)
console.log(array1.indexOf("a"))//returns 0, coz a exists
console.log(array1.indexOf("10"))//returns -1, coz 10 doesn't exist

// let's sort both arrays

console.log(num)
let sorted1=array1.sort() //Sorts descending order
console.log(sorted1)
let sorted2=array2.sort() //Sorts descending order
console.log(sorted2)

console.log(array1.length)
console.log(array2.length)

// Let's reverse the arrays
console.log(array1.reverse())
console.log(array2.reverse())

// Let's find somethng from the arrays
let found=array1.find(function (n){
    return n===67;
})
console.log(found)

