const car = {
    color: 'blue',
    year: 2010,
    make: 'Passo',
    brand: 'Toyota',
    price: 5000,

};
console.log(car.color)

let a=1;
const test = {
    a1: "test1",
    a2: "test2",
};

console.log(test)

// The code challenge

const person= {
    name: ["Biniam", "Tekeste"],
    age:30,
    gender: "male",
    interests: ['music', 'reading','browsing'],
    bio: function(){
        alert(this.name[0]+ " "+this.name[1]+" is"+this.age)
    },
    greetings: function (){
        alert("Hi! I'm"+ this.name[0]+".")
    }
};

console.log(person.name)
console.log(person.name[0])
console.log(person.name[1])
console.log(person['name'])
console.log(person)