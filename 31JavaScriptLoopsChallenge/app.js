const myWork=[];

for(let x=1;x<10;x++){
    let stat=x%2?true:false;
    let temp={name:`Lesson ${x}`,status:stat};
    myWork.push(temp)
}
console.log(myWork)
console.log(myWork.filter(function (n){
    return n.status;
}))

console.log(myWork.filter(n=> n.status))