
const person= {
    name: ["Biniam", "Tekeste"],
    age:30,
    gender: "male",
    interests: ['music', 'reading','browsing'],
    bio: function(){
        alert(this.name[0]+ " "+this.name[1]+" is "+this.age)
    },
    greetings: function (){
        alert("Hi! I'm"+ this.name[0]+".")
    }
};

console.log(person.name)
console.log(person.name[0])
console.log(person.name[1])
console.log(person['name'])
console.log(person.bio())