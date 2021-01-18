const btns=document.querySelectorAll('button')
let x, y, z;
x=y=z=0;
console.log(btns)

btns[0].onclick=message1;
btns[1].onclick=message2;
btns[2].onclick=message3;

function message1(){
    x++;
    message();
}

function message2(){
    y++;
    message();
}

function message3(){
    z++;
    message();
}

function message(){
    console.log(x +" "+ y+ " "+z)
}