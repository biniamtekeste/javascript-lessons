let myTime=prompt("What's your time, on 24 hours scale?")

if(myTime<6) {
    console.log("I'm sleeping!")
}
else if (myTime<12){
    console.log("Good morning!")
}
else if(myTime<=22) {
    console.log("Good afternoon!")
}
else {
    console.log ("I'm sleeping")
}