let myNumber =5;
console.log(`The data type of myNumber is: ${typeof myNumber}`)
console.log("Now Let us convert the data type of my myNumber to a String")
myNumber=String(myNumber);
console.log(myNumber);
console.log(`Now the data type of myNumber is: ${typeof myNumber}`);
console.log("Let us try to add myNumber which is a string to x, a variable whose value is 7 and is a number. We will store the result on a variable y")
let x= 7;
let y=x +myNumber;
console.log (`The value of y will be ${y}
But what is the data type of y, let's figure it out.`)
console.log(`The data type of y is ${typeof y}
This clearly shows the Type Coercion in JavaScript`)
