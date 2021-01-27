const array1=['a','b','c'];
for (let w=0;w<array1.length;w++){
    console.log(array1[w]);
}

// array1.forEach(n=>console.log(n))

array1.forEach(function (element, index, array) {
    console.log(element);
})

array1.forEach(function (element, index, array) {
    console.log(index);
})

array1.forEach(function (element, index, array) {
    console.log(array);
})