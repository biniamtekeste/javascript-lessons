const obj={a:1, b:2, c:3}
for (let property in obj){
    console.log(property, obj[property])
}

const array1=[1,2,3, 4];
for(let w=0; w<array1.length;w++){
    console.log(w, array1[w]);
}

array1.forEach( function(element, index, array){
    console.log(index, element);
});