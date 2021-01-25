const numbers=[77, 44, 2, 162, 18, 244, 71]

let result=numbers.filter(function (num){
    return num>75;
});

console.log(result);

const words=["Biniam", "Temie","Tekeste Bahta", "Hanibal", "Fruit", "Aki", "Abrih", "Nazu"];

result=words.filter(word => word.length>6);
console.log(result);

const mixed=[12, -2, 4, 0, -23, 33, -34, 8, 90, -1, -100, 456]

result=mixed.filter(n=> n<60);
console.log(result);

result=mixed.filter(n=> n>0)
console.log(result);
