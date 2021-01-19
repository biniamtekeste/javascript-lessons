let secretNumber=4;
guesser();

function guesser(){
    let guess=prompt("Guess a number")
    guess=Number(guess)
    if(guess!==NaN){
        if(guess===secretNumber){
            console.log("Great, you guessed it right!")
        }
        else {
            let message=(guess<secretNumber)? 'higher': 'lower';
            console.log("Wrong! Guess "+message)

            guesser();
        }
      
    }
}