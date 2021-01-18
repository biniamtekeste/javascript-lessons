let value1, value2, value3, value4;
value1=value2=value3=value4=0;

function message1(){
    value1++;
    message();
}

function message2(){
    value2++;
    message();
}

function message3(){
    value3++;
    message();
}

function message(){

    console.log(value1 +" "+value2 +" "+value3 + " " + value4);
}

console.log("Hi")

const btn4 = document.querySelector('.btn-4');
// console.log(btn4)

btn4.addEventListener('click', (e) => {
    console.log('You clicked me!')
    value4++;
    message()
})