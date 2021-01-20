function car(miles, company, color){
    this.miles=miles;
    this.company=company;
    this.color=color;
};

const myCar= new car(100, "honda", "pink");
console.log(myCar)

myCar.price=3000;
console.log(myCar)

const myCar2=new car("50000", "Toyota", "Black")
console.log(myCar2);

// My Own Example

function Student (name, age){
    this.name=name;
    this.age=age;
};

const firstStudent=new Student ("Biniam", 30);
const secondStudent=new Student ("Temie", 32);

console.log(firstStudent);
console.log(secondStudent);

// I can also add another property and value

firstStudent.gender="male"
console.log(firstStudent)