
adder1(100, 30);
adder1(30);
adder1();
adder2(100, 30);
adder2(30);
adder3(100, 30);
adder3();


function adder1(x=10, y=7){
    let sum=x+y;
    console.log("Method one: Sum is "+sum)
}

function adder2 (x, y){
    y=y||7;
    let sum=x+y;
    console.log("Method two: Sum is "+sum);
}

function adder3(x, y){
    y=typeof y !== 'undefined'? y:7;
    let sum=x+y;
    console.log("Method three: Sum is "+sum);
}