var listArray=["Bini","Blissful",34]
console.log(`This is listArray: ${listArray}`)

var value1=listArray.push("Test")
console.log(`This is value1, after pushing: ${value1}`)
console.log(`This is listArray, after pushing: ${listArray}`)

var value2=listArray.pop()
console.log(`This is value2, after poping: ${value2}`)
console.log(`This is listArray, after poping: ${listArray}`)

var value3=listArray.shift()
console.log(`This is value3, after shifting: ${value3}`)
console.log(`This is listArray, after shifting: ${listArray}`)

listArray.unshift("First")
console.log(`This is listArray, after unshifting: ${listArray}`)


var value4=listArray.splice(1,1)
console.log(`This is value4, after splicing: ${value4}`)
console.log(`This is listArray, after splicing: ${listArray}`)

console.log(listArray)
listArray.unshift('First')
console.log(listArray)
list