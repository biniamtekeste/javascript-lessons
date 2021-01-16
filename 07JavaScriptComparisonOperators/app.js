let checkNum =900;
if(checkNum){
    console.log("A Number Exists")
}
if(checkNum>50){
    console.log("The Number is Greater than 50")
}
else console.log("The number is less than 50")
console.log(`The number is ${checkNum}`)

let myNum=prompt("Enter a number")
if(myNum>10){
    console.log("The number you enetered is greater than 10.")
}
else if (myNum==10){
    console.log("The number you entered is equal to 10")
}
else if (myNum<10){
    console.log ("The number you entered is less than 10")
}
else {
    console.log ("You have not entered a number")
}