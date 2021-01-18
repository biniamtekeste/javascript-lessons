let outPut = "Hello World";
let counter = 0;
welcome(outPut);

function welcome(para) {
  counter++;
  let temp = counter + " times run";

  console.log(para);
  console.log(temp);
}
// A Function that adds 10 to any number passed to it.

let myNum = 50;
addTen(myNum);

function addTen(num) {
  let temp = Number(num);
  console.log(temp + 10);
}

welcome(outPut);
addTen(450);
