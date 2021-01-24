const numbers=[77, 44, 2, 162, 18, 244, 71]

let result=numbers.filter(function (num){
    return num>75;
});

console.log(result);

const words=["Biniam", "Temie","Tekeste Bahta", "Hanibal", "Fruit", "Aki", "Abrih", "Nazu"];

result=words.filter(word => word.length>6);
console.log(result);