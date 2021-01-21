const theList=['Laurence','Svekis',true, 35, null, undefined, {test:'one', score:55},['one', 'two']]

console.log(`Here is the original array: ${theList}`)
let val1=theList.shift();
let val2=theList.shift();
let val3=theList.shift();
console.log(`Here is the shifted array: ${theList}`)

theList.unshift('Make me first');

console.log(`Here is the shifted array: ${theList}`)

console.log(theList.length)
console.log(theList.splice(1,3))
console.log(theList.length)
console.log(`Here is the shifted array: ${theList}`)

let temp=Array.isArray(theList)
console.log(temp)

console.log(theList.indexOf('Make me first'))
