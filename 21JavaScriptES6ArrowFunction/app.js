// Arrow Functions are shorter formats for function expressions
var test10= function(x=7){
    x=Number(x)
    return x*5;
    
}
console.log(test10())

// Using Arrow Functions
const test11=(x=7)=>x*5;
console.log(test11())